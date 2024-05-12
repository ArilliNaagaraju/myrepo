const express = require('express');
const bodyParser = require('body-parser');
const mysql = require('mysql2');
const cors = require('cors');

const app = express();
const port = 3010;

// MySQL connection
const db = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'root',
  database: 'logn'
});

// Connect to MySQL
db.connect(err => {
  if (err) {
    console.error('Error connecting to MySQL:', err);
    return;
  }
  console.log('Connected to MySQL database');
});

// Middleware
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(cors()); // Add this line to enable CORS

// Route to handle user registration
app.post('/signup', (req, res) => {
  const { fullName, email, password } = req.body;

  // Validate the request body
  if (!fullName || !email || !password) {
    return res.status(400).send('Full name, email, and password are required.');
  }

  // Insert the user into the database
  const sql = 'INSERT INTO users (fullName, email, password) VALUES (?, ?, ?)';
  db.query(sql, [fullName, email, password], (err, result) => {
    if (err) {
      console.error('Error inserting user:', err);
      return res.status(500).send('Error inserting user into database.');
    }
    res.status(200).send('User registered successfully!');
  });
});

// file uplodeing in the mysql//

app.post('/submit', (req, res) => {
  const { description, checkbox, image } = req.body;
  // Save data to MySQL database
  const query = 'INSERT INTO your_table (description, checkbox, image) VALUES (?, ?, ?)';
  connection.query(query, [description, checkbox, image], (error, results, fields) => {
    if (error) {
      console.error('Error saving data to MySQL: ' + error);
      res.status(500).send('Internal Server Error');
      91
      
    } else {
      res.status(200).send('Form data saved successfully');
    }
  });
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
