const express = require('express');
const bodyParser = require('body-parser');
const mysql = require('mysql2');
const cors = require('cors');
const app = express();
const port = 3000;

app.use(cors());
app.use(bodyParser.json({ limit: '50mb' }));
app.use(bodyParser.urlencoded({ limit: '50mb', extended: true }));

const db = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'root',
  database: 'project'
});

db.connect(err => {
  if (err) throw err;
  console.log('MySQL connected...');
});

app.get('/api/credit-unions/:id', (req, res) => {
  const sql = 'SELECT * FROM credit_unions WHERE id = ?';
  db.query(sql, [req.params.id], (err, results) => {
    if (err) throw err;
    if (results.length > 0) {
      res.json(results[0]);
    } else {
      res.status(404).json({ message: 'Bank not found' });
    }
  });
});

app.post('/api/reviews', (req, res) => {
  const { name, review, rating, email, phoneNumber, website, address, profilePhoto, bankId } = req.body;
  const sql = 'INSERT INTO reviews (name, review, rating, email, phoneNumber, website, address, profilePhoto, bankId) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?)';
  db.query(sql, [name, review, rating, email, phoneNumber, website, address, profilePhoto, bankId], (err, result) => {
    if (err) throw err;
    res.send('Review added...');
  });
});

app.get('/api/reviews/:bankId', (req, res) => {
  const sql = 'SELECT * FROM reviews WHERE bankId = ?';
  db.query(sql, [req.params.bankId], (err, results) => {
    if (err) throw err;
    res.json(results);
  });
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
