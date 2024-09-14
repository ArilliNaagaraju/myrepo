// server.js
const express = require('express');
const mysql = require('mysql2');
const bodyParser = require('body-parser');
const cors = require('cors');
const app = express();

app.use(cors());
app.use(bodyParser.json());

// MySQL connection
const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'root',
  database: 'filevideos',
});

connection.connect(err => {
  if (err) {
    console.error('Error connecting to MySQL:', err);
    return;
  }
  console.log('Connected to MySQL');
});

// Handle user registration with email check
app.post('/register', (req, res) => {
  const { name, email, password } = req.body;

  // Check if email already exists
  const checkEmailQuery = 'SELECT * FROM users WHERE email = ?';
  connection.query(checkEmailQuery, [email], (err, results) => {
    if (err) {
      console.error('Error querying database:', err);
      return res.status(500).send('Error checking email');
    }

    // If email exists, return a response
    if (results.length > 0) {
      return res.status(400).send('Email already exists');
    }

    // Otherwise, insert the new user
    const insertUserQuery = 'INSERT INTO users (name, email, password) VALUES (?, ?, ?)';
    connection.query(insertUserQuery, [name, email, password], (err, result) => {
      if (err) {
        console.error('Error inserting user:', err);
        return res.status(500).send('Error inserting user');
      }
      res.status(200).send('User registered successfully');
    });
  });
});

// Start the server
app.listen(3000, () => {
  console.log('Server running on port 3000');
});
