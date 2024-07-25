const express = require('express');
const bodyParser = require('body-parser');
const mysql = require('mysql2');
const cors =require('cors')
const app = express();
const port = 3000;

app.use(bodyParser.json());
app.use(cors());

const db = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'root',
  database: 'fingerprints'
});

db.connect((err) => {
  if (err) throw err;
  console.log('Connected to MySQL');
});

app.get('/api/fingerprint/scan', (req, res) => {
  // Replace with actual fingerprint scanning logic
  const mockFingerprintData = { id: 1, data: 'sample_fingerprint_data' };
  res.json(mockFingerprintData);
});

app.post('/api/fingerprint/save', (req, res) => {
  const fingerprint = req.body;
  const sql = 'INSERT INTO fingerprints SET ?';
  db.query(sql, fingerprint, (err, result) => {
    if (err) throw err;
    res.json({ message: 'Fingerprint saved', id: result.insertId });
  });
});

app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});
