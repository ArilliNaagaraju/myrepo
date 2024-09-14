const express = require('express');
const mysql = require('mysql2');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
app.use(bodyParser.json());
app.use(cors());

// MySQL connection setup
const db = mysql.createConnection({
    host: 'localhost',
    user: 'root', // Your MySQL username
    password: 'root', // Your MySQL password
    database: 'movies' // The database you're using
});

db.connect((err) => {
    if (err) {
        console.error('Error connecting to MySQL:', err);
    } else {
        console.log('Connected to MySQL');
    }
});

// Create users table if not exists
db.query(`CREATE TABLE IF NOT EXISTS users (
    id INT AUTO_INCREMENT PRIMARY KEY,
    username VARCHAR(255) NOT NULL,
    gmail VARCHAR(255) NOT NULL UNIQUE,
    password VARCHAR(255) NOT NULL,
    theaterName VARCHAR(255),
    movieName VARCHAR(255),
    moviehall INT,
    area VARCHAR(255)
)`, (err, result) => {
    if (err) throw err;
    console.log('Users table created or already exists');
});

// Signup route
app.post('/signup', (req, res) => {
    const { username, gmail, password, theaterName, movieName, moviehall, area } = req.body;

    const query = `INSERT INTO users (username, gmail, password, theaterName, movieName, moviehall, area)
                   VALUES (?, ?, ?, ?, ?, ?, ?)`;

    db.query(query, [username, gmail, password, theaterName, movieName, moviehall, area], (err, result) => {
        if (err) {
            return res.status(500).json({ error: 'Error creating user: ' + err });
        }
        res.status(201).json({ message: 'User created successfully' });
    });
});

// Signin route
app.post('/signin', (req, res) => {
    const { gmail, password } = req.body;

    const query = `SELECT * FROM users WHERE gmail = ? AND password = ?`;

    db.query(query, [gmail, password], (err, results) => {
        if (err) {
            return res.status(500).json({ error: 'Error signing in: ' + err });
        }
        if (results.length > 0) {
            res.status(200).json({ message: 'Sign in successful', user: results[0] });
        } else {
            res.status(401).json({ error: 'Invalid credentials' });
        }
    });
});



// Route to get all movie data
app.get('/movies', (req, res) => {
    // SQL query to select theaterName and movieName
    const query = 'SELECT * FROM users';
    
    // Executing the query
    db.query(query, (err, results) => {
      if (err) {
        // Handling any errors in query execution
        return res.status(500).json({ error: 'Error fetching movie data' });
      }
      
      if (results.length === 0) {
        // If no data is found, return a 404 response
        return res.status(404).json({ message: 'No movie data found' });
      }
      
      // Sending the fetched data as a JSON response
      res.json(results);
    });
  });
  
  

  
// app.get('/users', (req, res) => {
//     const sql = 'SELECT * FROM users';
//     db.query(sql, (err, results) => {
//       if (err) {
//         return res.status(500).send(err);
//       }
//       res.json(results);
//     });
//   });



// Save seating data
app.post('/save-seating', (req, res) => {
    const { theaterId, totalSeats, leftRows, middleRows, rightRows } = req.body;

    // Example: Save data for left side rows
    leftRows.forEach(row => {
        const sql = 'INSERT INTO seating (theater_id, side, seats, rows) VALUES (?, ?, ?, ?)';
        db.query(sql, [theaterId, 'left', row.seats, row.rows], (err, result) => {
            if (err) throw err;
        });
    });

    // Repeat similar code for middleRows and rightRows
    // You might want to handle these rows in a loop like above

    res.send('Seating data saved successfully');
});


// Start the server
app.listen(3001, () => {
    console.log('Server is running on http://localhost:3001');
});
