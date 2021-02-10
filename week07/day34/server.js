'use strict'

const express = require('express');
const app = express();
const mysql = require('mysql');
require('dotenv').config();

app.use(express.static('public'));
app.use(express.json());
const PORT = 3000;

const conn = mysql.createConnection({
  host: process.env.MYSQL_HOST,
  database: process.env.MYSQL_DATABASE,
  user: process.env.MYSQL_USER,
  password: process.env.MYSQL_PASSWORD,
});

conn.connect((err) => {
  if(err) {
    console.error('Cannot connect to the database!', err);
    return;
  }
  console.log('Connection estabilished.');
});

app.get('/', (req, res) => {
  res.sendFile('index.html');
});

app.get('/book', (req, res) => {
  conn.query('SELECT book_name FROM book_mast;', (err, rows) => {
    if(err) {
      console.log(err.toString());
      res.status(500).json({ 'error': 'Can not read database!' });
      return;
    } else {
      res.json(rows);
    }
  })
});

app.get('/information', (req, res) => {
  conn.query('SELECT book_name, aut_name, cate_descrip, pub_name, book_price FROM book_mast INNER JOIN author ON book_mast.aut_id = author.aut_id INNER JOIN category ON book_mast.cate_id = category.cate_id INNER JOIN publisher ON book_mast.pub_id = publisher.pub_id;', (err, rows) => {
    if(err) {
      console.log(err.toString());
      res.status(500).json({ 'error': 'Can not read database!' });
      return;
    } else {
      res.json(rows);
    }
  })
});

app.listen(PORT);