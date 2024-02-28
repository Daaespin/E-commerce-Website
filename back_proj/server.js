
const express = require('express');
const router = express.Router();
const mysql = require('mysql');

const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '*******',
    database: 'website'
});


router.get('/api/champions', (req, res) => {
    const sql = 'SELECT * FROM champions';
    connection.query(sql, (err, champions) => {
        if (err) {
            console.error('Error fetching champions:', err);
            res.status(500).json({ error: 'Internal server error' });
        } else {
            res.json(champions);
        }
    });
});

module.exports = router;
