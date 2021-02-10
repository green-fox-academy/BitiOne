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



app.listen(PORT);