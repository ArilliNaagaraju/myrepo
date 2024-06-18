// server.js

const express = require('express');
const bodyParser = require('body-parser');
const mysql = require('mysql2');
const cors = require('cors');

const app = express();
const port = 3000;

const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'root',
  database: 'logia'
});

connection.connect(err => {
  if (err) {
    console.error('Error connecting to database:', err);
    return;
  }else{
    console.log('Connected to MySQL database');
  }

});

app.use(bodyParser.json());
app.use(cors());

app.post('/sing', (req, res) => {
  const { name, password } = req.body;
  const query = 'INSERT INTO namej (name, password) VALUES (?, ?)';
  connection.query(query, [name, password], (err, result) => {
    if (err) {
      console.error('Error saving user to database:', err);
      res.status(500).send('Error saving user');
      return;
    }else{
      console.log('User saved to database:', result);
      res.status(200).send('User saved successfully');
    }
   
  });
});

app.listen(port, () => console.log(`Server listening on port ${port}`));
