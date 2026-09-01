const express = require('express');
const cors = require('cors');
require('dotenv').config();

// 1. IMPORT FILE CONFIG DATABASE AGAR OTOMATIS TERHUBUNG SAAT SERVER START
require('./config/db'); 

const quizRouter = require('./routes/quizRouter');

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware dasar
app.use(cors());
app.use(express.json()); // Agar server bisa membaca body format JSON

// Routing Utama
app.use('/api/quiz', quizRouter);

// Default Route
app.get('/', (req, res) => {
    res.send('Backend Node.js Berhasil Berjalan!');
});

// 2. TAMBAHKAN '0.0.0.0' AGAR RAILWAY BISA MENERUSKAN TRAFIK INTERNET DENGAN AMAN
app.listen(PORT, '0.0.0.0', () => {
    console.log(`Server aktif dan mendengarkan di port: ${PORT}`);
});
