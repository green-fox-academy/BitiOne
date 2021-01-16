'use strict';

const express = require('express');
const mysql = require('mysql');
const app = express();
app.use(express.json());
app.use(express.static('public'));
const PORT = 3000;

const conn = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'hooah2020',
  database: 'reddit',
});

conn.connect((err) =>{
  if(err) {
    console.log(err.toString());
  }
  console.log('Connected to MySQL.');
});

app.get('/hello', (req, res) => {
  res.send('Hello World!');
});

app.listen(PORT);