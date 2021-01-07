'use strict';

const express = require('express');
const app = express();
app.set('view engine', 'ejs');
const PORT = 3000;

app.get('/', (req,res) => {
  if(req.query.name === undefined) {
    res.send(`Welcome back, Guest!`);
  } else {
    res.send(`Welcome back, ${req.query.name}!`);
  }
});

app.listen(PORT);