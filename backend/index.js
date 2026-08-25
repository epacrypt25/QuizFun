const express = require('express');
const cors = require('cors');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');
require('dotenv').config();

const app = express();
app.use(cors());
app.use(express.json());

const PORT = process.env.PORT || 3001;
const JWT_SECRET = process.env.JWT_SECRET || 'rahasia-super-aman';

// ==========================================
// MOCK DATABASE (Sementara di dalam memory)
// Nantinya bisa diganti dengan MongoDB/MySQL
// ==========================================
const users = []; // Array untuk menyimpan data user
const quizzes = [ // Data soal-soal kuis
    {
        id: 1,
        title: "Pengenalan Real World Asset (RWA)",
        type: 1, // 1 = Kuis RWA
        questions: [
            { id: 101, question: "Apa kepanjangan dari RWA?", options: ["Real World Asset", "Right Way Action", "Real Web Application"], answer: "Real World Asset" },
            { id: 102, question: "Contoh dari RWA adalah?", options: ["Properti", "Bitcoin", "Meme Coin"], answer: "Properti" }
        ]
    },
    {
        id: 2,
        title: "Kuis Pengetahuan Umum Web3",
        type: 2, // 2 = Kuis USDT
        questions: [
            { id: 201, question: "Blockchain yang pertama kali diciptakan adalah?", options: ["Ethereum", "Solana", "Bitcoin"], answer: "Bitcoin" },
            { id: 202, question: "Apa nama mata uang asli di jaringan Ethereum?", options: ["ETH", "USDT", "BNB"], answer: "ETH" }
        ]
    }
];

// ==========================================
// MIDDLEWARE AUTHENTICATION
// ==========================================
const authenticateToken = (req, res, next) => {
    const authHeader = req.headers['authorization'];
    const token = authHeader && authHeader.split(' ')[1];
    
    if (!token) return res.status(401).json({ message: "Token tidak ditemukan" });

    jwt.verify(token, JWT_SECRET, (err, user) => {
        if (err) return res.status(403).json({ message: "Token tidak valid atau kadaluarsa" });
        req.user = user;
        next();
    });
};

// ==========================================
// ROUTES: AUTH & USER DATA
// ==========================================

// Register (Pendaftaran Akun Biasa)
app.post('/api/auth/register', async (req, res) => {
    try {
        const { username, email, password, walletAddress } = req.body;
        
        // Cek apakah user sudah ada
        if (users.find(u => u.email === email)) {
            return res.status(400).json({ message: "Email sudah terdaftar" });
        }

        // Hash password
        const hashedPassword = await bcrypt.hash(password, 10);
        
        const newUser = {
            id: users.length + 1,
            username,
            email,
            password: hashedPassword,
            walletAddress: walletAddress || null // Bisa di-link nanti
        };
        
        users.push(newUser);
        res.status(201).json({ message: "Registrasi berhasil", user: { id: newUser.id, username, email } });
    } catch (error) {
        res.status(500).json({ message: "Terjadi kesalahan server" });
    }
});

// Login
app.post('/api/auth/login', async (req, res) => {
    try {
        const { email, password } = req.body;
        const user = users.find(u => u.email === email);
        
        if (!user) return res.status(404).json({ message: "User tidak ditemukan" });

        const isPasswordValid = await bcrypt.compare(password, user.password);
        if (!isPasswordValid) return res.status(401).json({ message: "Password salah" });

        // Buat token JWT
        const token = jwt.sign({ id: user.id, email: user.email, walletAddress: user.walletAddress }, JWT_SECRET, { expiresIn: '1d' });
        
        res.json({ message: "Login berhasil", token });
    } catch (error) {
        res.status(500).json({ message: "Terjadi kesalahan server" });
    }
});

// Get User Profile (Butuh Token)
app.get('/api/user/profile', authenticateToken, (req, res) => {
    const user = users.find(u => u.id === req.user.id);
    if (!user) return res.status(404).json({ message: "User tidak ditemukan" });

    res.json({
        id: user.id,
        username: user.username,
        email: user.email,
        walletAddress: user.walletAddress
    });
});

// ==========================================
// ROUTES: QUIZ DATA
// ==========================================

// Ambil semua daftar kuis
app.get('/api/quizzes', (req, res) => {
    // Kita hanya mengembalikan info kuis tanpa jawaban agar aman
    const safeQuizzes = quizzes.map(q => ({
        id: q.id,
        title: q.title,
        type: q.type,
        questionCount: q.questions.length
    }));
    res.json(safeQuizzes);
});

// Ambil detail pertanyaan suatu kuis (Butuh Token)
app.get('/api/quizzes/:id', authenticateToken, (req, res) => {
    const quizId = parseInt(req.params.id);
    const quiz = quizzes.find(q => q.id === quizId);
    
    if (!quiz) return res.status(404).json({ message: "Kuis tidak ditemukan" });

    // Jangan kirim jawaban ke frontend, frontend hanya mengirim opsi yang dipilih
    const safeQuestions = quiz.questions.map(q => ({
        id: q.id,
        question: q.question,
        options: q.options
    }));

    res.json({ id: quiz.id, title: quiz.title, questions: safeQuestions });
});

// Endpoint untuk cek jawaban kuis di backend
app.post('/api/quizzes/:id/submit', authenticateToken, (req, res) => {
    const quizId = parseInt(req.params.id);
    const { answers } = req.body; // format: { 101: "Real World Asset", 102: "Properti" }
    
    const quiz = quizzes.find(q => q.id === quizId);
    if (!quiz) return res.status(404).json({ message: "Kuis tidak ditemukan" });

    let correctCount = 0;
    
    quiz.questions.forEach(q => {
        if (answers[q.id] === q.answer) {
            correctCount++;
        }
    });

    const score = (correctCount / quiz.questions.length) * 100;

    // Backend hanya menghitung skor. 
    // Untuk klaim token di smart contract, frontend bisa menggunakan skor ini,
    // atau backend yang memicu transaksi ke blockchain (tergantung arsitektur Anda nanti).
    res.json({
        message: "Kuis selesai",
        score: score,
        passed: score >= 80
    });
});


// Health check endpoint
app.get('/api/health', (req, res) => {
    res.json({ status: 'ok', message: 'Backend Biasa (Data & Auth) is running' });
});

app.listen(PORT, () => {
    console.log(`Backend server listening on port ${PORT}`);
});
