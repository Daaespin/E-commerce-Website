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

// Serve pictures from the 'images' folder
//static
app.use('/images', express.static(path.join(__dirname, 'images')));

// get the route from mysql
app.get('/images', async (req, res) => {
    try {
        const connection = await pool.getConnection();
        const [rows] = await connection.query('SELECT image_link FROM gallery2');
        connection.release();

        // Get image links from the query results and update them to include the '/images/' prefix or it wont load the pictures for some reason
        const images = rows.map(row => `/images/${row.image_link}`); // Update to include the '/images/' prefix
        res.json({ images });
    } catch (error) {
        console.error('Error fetching links from MySQL:', error);
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

app.use('/champions', express.static(path.join(__dirname, 'champions')));

// get the route from mysql
app.get('/champions', async (req, res) => {
    try {
        const connection = await pool.getConnection();
        const [rows] = await connection.query('SELECT champion_name, image_link FROM champs');
        connection.release();

        const championsData = rows.map(row => ({
            name: row.champion_name,
            imageLink: `/champions/${row.image_link}`
        }));

        res.json({ champions: championsData });
    } catch (error) {d
        console.error('Error fetching champions from MySQL:', error);
        res.status(500).json({ error: 'Internal server error' });
    }
});

app.get('/names', async (req, res) => {
    try {
        const connection = await pool.getConnection();
        const [rows] = await connection.query('SELECT champion_name FROM names');
        connection.release();

        const championNames = rows.map(row => row.champion_name);

        res.json({ names: championNames });
    } catch (error) {
        console.error('Error fetching champion names from MySQL:', error);
        res.status(500).json({ error: 'Internal server error' });
    }
});

app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});
