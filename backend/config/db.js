const mysql = require('mysql2');
require('dotenv').config();

// Membuat pool dengan fitur auto-reconnect (Keep Alive)
const pool = mysql.createPool({
    uri: process.env.DATABASE_URL,
    waitForConnections: true,
    connectionLimit: 10,
    queueLimit: 0,
    enableKeepAlive: true, // Menjaga koneksi tetap hidup ke server cloud
    keepAliveInitialDelay: 10000 
});

const db = pool.promise();

pool.getConnection((err, connection) => {
    if (err) {
        console.error('Gagal terhubung ke MySQL:', err.message);
    } else {
        console.log('Selamat! Database MySQL Railway Berhasil Terhubung Ke Localhost.');
        connection.release();
    }
});

module.exports = db;
