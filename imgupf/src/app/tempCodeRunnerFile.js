const express = require('express');
const mysql = require('mysql2');
const multer = require('multer');
const path = require('path');
const bodyParser = require('body-parser');

const app = express();
const port = 3001;

// Set up body-parser
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Set up multer for file upload
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, 'uploads/'); // Specify the upload directory
  },
  filename: function (req, file, cb) {
    cb(null, Date.now() + path.extname(file.originalname)); // Append timestamp to filename
  }
});
const upload = multer({ storage: storage });

// Set up MySQL connection
const db = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'root',
  database: 'myimg'
});

db.connect((err) => {
  if (err) throw err;
  console.log('Connected to MySQL');
});

// POST endpoint to handle form submission
app.post('/upload', upload.single('profileImage'), (req, res) => {
  const { name, type } = req.body;
  const profileImage = req.file ? req.file.path : null;

  // SQL query to insert data
  const sql = 'INSERT INTO your_table_name (name, type, profileImage) VALUES (?, ?, ?)';
  db.query(sql, [name, type, profileImage], (err, result) => {
    if (err) throw err;
    res.send('Data and image saved to database');
  });
});

// Serve the uploaded files
app.use('/uploads', express.static('uploads'));

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
