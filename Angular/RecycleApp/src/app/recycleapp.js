const express = require('express');
const bodyParser = require('body-parser');
const mysql = require('mysql2');
const nodemailer = require('nodemailer');
const cors = require('cors');
const app = express();
const port = 3011;

app.use(bodyParser.json());
app.use(cors()); // Enable CORS for all routes

// MySQL connection
const db = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'root',
  database: 'verificatin'
});

db.connect((err) => {
  if (err) {
    console.error('Database connection failed: ' + err.stack);
    return;
  }
  console.log('Connected to database.');
});

// Nodemailer setup for Gmail
const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: 'anaagaaraju14402@gmail.com',
    pass: 'hupt iubn uuud yjhz'
  }
});

// Helper function to send email
const sendMail = (email, code) => {
  const mailOptions = {
    from: 'anaagaaraju14402@gmail.com',
    to: email,
    subject: 'Verification Code for Password Reset',
    text: `Your verification code is: ${code}`
  };

  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.error('Error sending email:', error);
    } else {
      console.log('Email sent:', info.response);
    }
  });
};

// Sign up endpoint
app.post('/signup', (req, res) => {
  const { email, password } = req.body;
  const query = 'INSERT INTO emplo (email, password) VALUES (?, ?)';

  db.query(query, [email, password], (err, results) => {
    if (err) {
      console.error('Error signing up:', err);
      res.status(500).json({ message: 'Error signing up' });
    } else {
      res.status(200).json({ message: 'Sign up successful' });
    }
  });
});

// Sign in endpoint
app.post('/signin', (req, res) => {
  const { email, password } = req.body;
  const query = 'SELECT * FROM emplo WHERE email = ? AND password = ?';

  db.query(query, [email, password], (err, results) => {
    if (err) {
      console.error('Error signing in:', err);
      res.status(500).json({ message: 'Error signing in' });
    } else if (results.length > 0) {
      res.status(200).json({ message: 'Sign in successful' });
    } else {
      res.status(401).json({ message: 'Invalid credentials' });
    }
  });
});

// Send code to email endpoint
app.post('/sendcode', (req, res) => {
  const { email } = req.body;
  const code = Math.floor(100000 + Math.random() * 900000).toString(); // Generate 6-digit verification code

  const query = 'UPDATE emplo SET verification_code = ? WHERE email = ?';
  db.query(query, [code, email], (err, results) => {
    if (err) {
      console.error('Error updating verification code:', err);
      res.status(500).json({ message: 'Error sending verification code' });
    } else {
      if (results.affectedRows === 0) {
        res.status(404).json({ message: 'Email not found' });
      } else {
        sendMail(email, code); // Send verification code via email
        res.status(200).json({ message: 'Code sent successfully' });
      }
    }
  });
});

// Verify code endpoint
app.post('/verifycode', (req, res) => {
  const { email, code } = req.body;
  const query = 'SELECT * FROM emplo WHERE email = ? AND verification_code = ?';

  db.query(query, [email, code], (err, results) => {
    if (err) {
      console.error('Error verifying code:', err);
      res.status(500).json({ message: 'Error verifying code' });
    } else if (results.length > 0) {
      res.status(200).json({ message: 'Code verified successfully' });
    } else {
      res.status(400).json({ message: 'Invalid code' });
    }
  });
});

// Reset password endpoint
app.post('/resetpassword', (req, res) => {
  const { email, password } = req.body;
  const query = 'UPDATE emplo SET password = ? WHERE email = ?';

  db.query(query, [password, email], (err, results) => {
    if (err) {
      console.error('Error resetting password:', err);
      res.status(500).json({ message: 'Error resetting password' });
    } else {
      if (results.affectedRows === 0) {
        res.status(404).json({ message: 'Email not found' });
      } else {
        res.status(200).json({ message: 'Password reset successfully' });
      }
    }
  });
});

// Check if email exists endpoint
app.post('/checkemail', (req, res) => {
  const { email } = req.body;
  const query = 'SELECT * FROM emplo WHERE email = ?';

  db.query(query, [email], (err, results) => {
    if (err) {
      console.error('Error checking email:', err);
      res.status(500).json({ message: 'Error checking email' });
    } else if (results.length > 0) {
      res.status(200).json({ message: 'Email exists' });
    } else {
      res.status(404).json({ message: 'Email not found' });
    }
  });
});

app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});