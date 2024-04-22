const express = require('express');
const bodyParser = require('body-parser');
const mysql = require('mysql2');

const app = express();

// MySQL Connection Pool
const pool = mysql.createPool({
  host: 'localhost',
  user: 'root', // Replace with your MySQL username
  password: 'root', // Replace with your MySQL password
  database: 'test'
});

// Express middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Route to handle POST request
app.post('/insertData', (req, res) => {
  const ename = req.body.ename;

  // Get a connection from the pool
  pool.getConnection((err, connection) => {
    if (err) {
      console.error('Error getting connection from pool:', err);
      res.status(500).json({ error: 'Internal Server Error' });
      return;
    }

    // Use the connection
    const query = 'INSERT INTO detales (ename) VALUES (?)';
    connection.query(query, [ename], (error, results) => {
      // Release the connection back to the pool
      connection.release();

      if (error) {
        console.error('Error executing query:', error);
        res.status(500).json({ error: 'Internal Server Error' });
      } else {
        res.status(200).json({ message: 'Data inserted successfully' });
      }
    });
  });
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
