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
app.post('/sign', (req, res) => {
    const { name, password, confpassword } = req.body;

    // Validate the request body
    if (!name || !password || !confpassword) {
        return res.status(400).send('Name, password, and confpassword are required.');
    }

    // Insert the user into the database
    const sql = 'INSERT INTO users (name, password, confpassword) VALUES (?, ?, ?)';
    db.query(sql, [name, password, confpassword], (err, result) => {
        if (err) {
            console.error('Error inserting user:', err);
            return res.status(500).send('Error inserting user into database.');
        }
        res.status(200).send('User added successfully!');
    });
});


// Login route
app.post('/login', (req, res) => {
    const { name, password } = req.body;
    const query = 'SELECT * FROM users WHERE name = ? AND password = ?';
    connection.query(query, [name, password], (err, results) => {
      if (err) {
        res.status(500).json({ error: 'Internal server error' });
      } else {
        if (results.length > 0) {
          res.json({ success: true });
        } else {
          res.json({ success: false });
        }
      }
    });
  });


app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
