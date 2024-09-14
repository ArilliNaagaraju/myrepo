// const express = require('express');
// const mysql = require('mysql2');
// const bodyParser = require('body-parser');
// const cors = require('cors');

// const app = express();
// app.use(bodyParser.json());
// app.use(cors());

// // MySQL connection setup
// const db = mysql.createConnection({
//     host: 'localhost',
//     user: 'root',
//     password: 'root',
//     database: 'movies'
// });

// db.connect((err) => {
//     if (err) {
//         console.error('Error connecting to MySQL:', err);
//     } else {
//         console.log('Connected to MySQL');
//     }
// });

// // Create seats table if not exists
// db.query(`CREATE TABLE IF NOT EXISTS seats (
//     id INT AUTO_INCREMENT PRIMARY KEY,
//     theaterId INT NOT NULL,
//     totalSeats INT NOT NULL,
//     totalColumns INT NOT NULL,
//     side VARCHAR(10) NOT NULL,
//     rowNumber INT NOT NULL,
//     seatsCount INT NOT NULL
// )`, (err, result) => {
//     if (err) throw err;
//     console.log('Seats table created or already exists');
// });

// // Route to save seating data
// app.post('/save-seating', (req, res) => {
//     const { theaterId, totalSeats, totalColumns, leftRows, rightRows } = req.body;

//     const insertRows = (rows, side) => {
//         rows.forEach(row => {
//             const { rowNumber, seatsControl, rowsControl } = row;
//             const seatsCount = parseInt(seatsControl, 10);
//             const rowsCount = parseInt(rowsControl, 10);

//             // Insert seats data into the database
//             for (let i = 1; i <= rowsCount; i++) {
//                 db.query(`INSERT INTO seats (theaterId, totalSeats, totalColumns, side, rowNumber, seatsCount) VALUES (?, ?, ?, ?, ?, ?)`,
//                     [theaterId, totalSeats, totalColumns, side, rowNumber, seatsCount],
//                     (err, result) => {
//                         if (err) {
//                             console.error('Error inserting seats data:', err);
//                         }
//                     });
//             }
//         });
//     };

//     insertRows(leftRows, 'left');
//     insertRows(rightRows, 'right');

//     res.status(201).json({ message: 'Seating data saved successfully' });
// });

// // Start the server
// app.listen(3000, () => {
//     console.log('Server is running on http://localhost:3000');
// });
