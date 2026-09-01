const db = require('../config/db'); 

exports.getAllQuizzes = async (req, res) => {
    try {
        // Jalankan query SQL mentah
        const [rows] = await db.query('SELECT * FROM users');
        
        res.status(200).json({
            success: true,
            data: rows
        });
    } catch (error) {
        res.status(500).json({
            success: false,
            message: "Gagal mengambil data",
            error: error.message
        });
    }
};
