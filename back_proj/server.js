const express = require('express');
const mysql = require('mysql2/promise');
const cors = require('cors');
const path = require('path'); // Import the path module

const app = express();
const port = 3000;

app.use(cors());
app.use(express.json());

const pool = mysql.createPool({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'website'
});

// Serve static files from the 'images' directory
app.use('/images', express.static(path.join(__dirname, 'images')));

// Route to fetch images
app.get('/images', async (req, res) => {
    try {
        const connection = await pool.getConnection();
        const [rows] = await connection.query('SELECT image_link FROM gallery2');
        connection.release();

        // Extract image links from the query results
        const images = rows.map(row => `/images/${row.image_link}`); // Update to include the '/images/' prefix
        res.json({ images });
    } catch (error) {
        console.error('Error fetching images from MySQL:', error);
        res.status(500).json({ error: 'Internal server error' });
    }
});

// Route to insert text sections
app.post('/sections', async (req, res) => {
    try {
        const { title, content } = req.body;

        const connection = await pool.getConnection();
        await connection.query('INSERT INTO sections (title, content) VALUES (?, ?)', [title, content]);
        connection.release();

        res.status(201).json({ message: 'Text inserted successfully' });
    } catch (error) {
        console.error('Error inserting text into MySQL:', error);
        res.status(500).json({ error: 'Internal server error' });
    }
});

// Route to fetch text sections
app.get('/sections', async (req, res) => {
    try {
        const connection = await pool.getConnection();
        const [rows] = await connection.query('SELECT * FROM sections');
        connection.release();

        res.json({ sections: rows });
    } catch (error) {
        console.error('Error fetching sections from MySQL:', error);
        res.status(500).json({ error: 'Internal server error' });
    }
});

app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});
