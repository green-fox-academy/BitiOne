'use strict';

const express = require('express');
const app = express();
const mysql = require('mysql');
app.use(express.json());
const PORT = 3000;

let conn = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'hooah2020',
  database: 'bookstore',
});

conn.connect((err) => {
  if(err) {
    console.error('Cannot connect to the database!', err);
    return;
  }
  console.log('Connection estabilished.');
});

app.get('/', (req, res) => {
  res.send('Működik a szerver!');
});

app.get('/book', (req, res) => {
  conn.query('SELECT book_name FROM book_mast;', (err, rows) => {
    if(err) {
      console.log(err.toString());
      res.status(500).json({'error': 'Database error!'});
      return;
    }
    res.json(rows);
  });
});

app.listen(PORT);