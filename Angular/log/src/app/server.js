const express = require('express');
const mysql = require('mysql2');
const bodyParser = require('body-parser');
const cors = require('cors');
const bcrypt = require('bcrypt');

const app = express();
const port = 3040;

app.use(cors());
app.use(bodyParser.json());

// MySQL connection
const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'root',
    database: 'myapp'
});

connection.connect(error => {
    if (error) throw error;
    console.log('Database connected!');
});

// CRUD endpoints
app.get('/users', (req, res) => {
    connection.query('SELECT * FROM users', (error, results) => {
        if (error) throw error;
        res.send(results);
    });
});

app.post('/users', async (req, res) => {
    const { name, email, password } = req.body;
    const hashedPassword = await bcrypt.hash(password, 10);

    const user = { name, email, password: hashedPassword };
    connection.query('INSERT INTO users SET ?', user, (error, results) => {
        if (error) throw error;
        res.status(201).send(`User added with ID: ${results.insertId}`);
    });
});

app.put('/users/:id', (req, res) => {
    const id = req.params.id;
    const user = req.body;
    connection.query('UPDATE users SET ? WHERE id = ?', [user, id], (error) => {
        if (error) throw error;
        res.send(`User updated with ID: ${id}`);
    });
});

app.delete('/users/:id', (req, res) => {
    const id = req.params.id;
    connection.query('DELETE FROM users WHERE id = ?', id, (error) => {
        if (error) throw error;
        res.send(`User deleted with ID: ${id}`);
    });
});

app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});
