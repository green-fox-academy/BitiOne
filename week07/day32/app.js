'use strict';

const express = require('express');
const app = express();
const path = require('path');
const PORT = 3000;

app.use(express.static('assets'));

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'index.html'));
});

app.get('/doubling', (req, res) => {
  const doubled = {};
  let received = req.query.input;
  let result = received * 2;
  doubled.received = Number(received);
  doubled.result = result;
  if(received === undefined) {
    res.json({'error': "Please provide an input!"});
  } else {
    res.json(doubled);
  }
});

app.listen(PORT, () => {
  console.log(`Listening port: ${PORT}.`);
});