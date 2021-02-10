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

app.get('/', (req, res) => {
  res.sendFile('/public/index.html');
});

app.get('/posts', (req, res) => {
  conn.query('SELECT * FROM posts;', (err, rows) => {
    if(err) {
      res.status(500).json(err);
    }
    //const containerObject = {
    //  posts: rows
    //};
    res.status(200).json(rows);
  });
});

app.post('/posts', (req, res) => {
  conn.query('INSERT INTO posts (title, url) VALUES (?, ?);', [req.body.title, req.body.url], (err, rows) => {
    if(err) {
      res.status(500).json(err);
      return;
    }
    conn.query('SELECT * FROM posts WHERE id=(SELECT MAX(id) FROM posts);', (err, rows) => {
      if(err) {
        res.status(500).json(err);
      }
      res.status(200).json(rows[0]);
    });
  });
});

app.put('/posts/:id/upvote', (req, res) => {
  conn.query(`UPDATE posts SET score = score + 1 WHERE id=?;`, [req.params.id], (err, rows) => {
    if(err) {
      res.status(500).json(err);
    }
    conn.query(`SELECT * FROM posts WHERE id=${req.params.id};`, (err, rows) => {
      if(err) {
        res.status(500).json(err);
      }
      res.status(200).json(rows[0]);
    });
  });
});

app.put('/posts/:id/downvote', (req, res) => {
  conn.query(`UPDATE posts SET score = score - 1 WHERE id=?;`, [req.params.id], (err, rows) => {
    if(err) {
      res.status(500).json(err);
    }
    conn.query(`SELECT * FROM posts WHERE id=${req.params.id};`, (err, rows) => {
      if(err) {
        res.status(500).json(err);
      }
      res.status(200).json(rows[0]);
    });
  });
});

app.listen(PORT);