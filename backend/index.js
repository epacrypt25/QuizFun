const express = require('express');
const cors = require('cors');
require('dotenv').config();

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

app.listen(PORT, () => {
    console.log(`Server aktif di port http://localhost:${PORT}`);
});
