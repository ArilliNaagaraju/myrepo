const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const mysql = require('mysql2');
const app = express();
app.use(bodyParser.json());
app.use(cors());

const db = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'root',
  database: 'filevideos'
});

db.connect(err => {
  if (err) {
    console.error('Database connection failed:', err.stack);
    return;
  }
  console.log('Connected to database.');
});

app.post('/api/data', (req, res) => {
  const data = { name: req.body.name, email: req.body.email };
  const query = 'INSERT INTO mytable SET ?';
  db.query(query, data, (err, results) => {
    if (err) {
      return res.status(500).send(err);
    }
    res.status(200).send('Data saved successfully');
  });
});

app.post('/message', (req, res) => {
  const message = req.body.message;
  console.log(`Received message: ${message}`);
  res.send(`Message received: ${message}`);
});
//back end 
app.get('/', (req, res) => {
  res.send('i am pratheeksha.');
});


app.listen(3000, () => {
  console.log('Server is running on port 3000');
});
