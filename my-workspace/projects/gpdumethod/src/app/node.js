// server.js

const express = require('express');
const bodyParser = require('body-parser');
const mysql = require('mysql2');

const app = express();
const port = 3000;

// Create MySQL connection
const connection = mysql.createConnection({
host: 'localhost',
user: 'root',
password: 'root',
database: 'logia'
});

// Connect to MySQL
connection.connect((err) => {
if (err) {
    console.error('Error connecting to MySQL: ' + err.stack);
    return;
}
console.log('Connected to MySQL as id ' + connection.threadId);
});

// Parse JSON requests
app.use(bodyParser.json());

// Define routes
app.post('/api/users', (req, res) => {
const { name, email } = req.body;
const newUser = { name, email };
connection.query('INSERT INTO users SET ?', newUser, (error, results) => {
    if (error) {
    console.error('Error adding user: ' + error.stack);
    res.status(500).json({ error: 'Error adding user' });
    return;
    }
    console.log('User added successfully');
    res.json({ message: 'User added successfully!', newUser });
});
});

// Start server
app.listen(port, () => {
console.log(`Server is running on http://localhost:${port}`);
});
