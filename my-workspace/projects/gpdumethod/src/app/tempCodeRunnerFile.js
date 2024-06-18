const express = require('express');
const bodyParser = require('body-parser');
const mysql = require('mysql2');
const cors = require('cors');

const app = express();
const port = 3006;

// MySQL connection
const db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'root',
    database: 'fulllogin'
});

// Connect to MySQL
db.connect((err) => {
    if (err) {
        console.error('Error connecting to MySQL:', err);
        return;
    }
    console.log('Connected to MySQL database');
});

// Middleware
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(cors()); 

// Route to handle user signup
app.post('/app', (req, res) => {
    const { name, password, confpassword } = req.body;

    // Validate input
    if (!name || !password || !confpassword) {
        return res.status(400).json({ error: 'All fields are reequired' });
    }

    if (password !== confpassword) {
        return res.status(400).json({ error: 'Passwords do not match' });
    }

    // Insert user into database
    const sql = 'INSERT INTO users (name, password) VALUES (?, ?)';
    db.query(sql, [name, password], (err, result) => {
        if (err) {
            console.error('Error inserting user into database:', err);
            return res.status(500).json({ error: 'Database error' });
        }
        res.status(200).json({ message: 'User registered successfully' });
    });
});

app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});
