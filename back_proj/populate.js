const express = require('express');
const multer = require('multer');
const mysql = require('mysql2/promise'); // Import the mysql2/promise module
const path = require('path');

const app = express();

// Create MySQL connection pool using mysql2
const pool = mysql.createPool({
    host: 'localhost',
    user: 'root',
    password: 'pesa25dani52',
    database: 'website',
});

// Multer configuration for file uploads
const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, 'uploads/');
    },
    filename: (req, file, cb) => {
        cb(null, Date.now() + path.extname(file.originalname));
    }
});

const upload = multer({ storage });

// Define an API endpoint to handle image uploads
app.post('/api/upload', upload.single('image'), (req, res) => {
    const { filename, path: filepath } = req.file;

    pool.getConnection((err, connection) => {
        if (err) {
            console.error('Error getting MySQL connection:', err);
            res.status(500).json({ error: 'Internal server error' });
            return;
        }

        connection.query('INSERT INTO images (filename, filepath) VALUES (?, ?)', [filename, filepath], (error, results) => {
            connection.release(); // Release the connection back to the pool
            if (error) {
                console.error('Error inserting image into database:', error);
                res.status(500).json({ error: 'Internal server error' });
            } else {
                res.json({ success: true, message: 'Image uploaded successfully' });
            }
        });
    });
});

// Start the server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
