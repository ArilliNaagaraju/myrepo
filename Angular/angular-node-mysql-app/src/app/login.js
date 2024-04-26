const express = require('express');
const bodyParser = require('body-parser');
const mysql = require('mysql2');

const app = express();
const port = 4200;

// Middleware
app.use(bodyParser.json());

// MySQL Connection
const db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'root',
    database: 'lkjh'
});

db.connect((err) => {
    if (err) {
        console.error('Error connecting to database: ' + err.stack);
        return;
    }
    console.log('Connected to database as id ' + db.threadId);
});

// API routes
app.post('/register', (req, res) => {
    const { username, password } = req.body;
    const INSERT_USER_QUERY = `INSERT INTO users (username, password) VALUES (?, ?)`;

    db.query(INSERT_USER_QUERY, [username, password], (err, result) => {
        if (err) {
            console.error('Error inserting data: ' + err.stack);
            res.status(500).send('Error registering user');
            return;
        }
        console.log('User registered successfully');
        res.send('User registered successfully');
    });
});

// Start server
app.listen(port, () => {
    console.log(`Node.js server running on port ${port}`);
});
