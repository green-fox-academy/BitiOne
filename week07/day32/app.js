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

app.get('/greeter', (req, res) => {
  let name = req.query.name;
  let title = req.query.title;

  const welcomeMessage = {
    "welcome_message": `Oh, hi there ${name}, my dear ${title}!`
  };

  if(name === undefined && title === undefined) {
    res.status(400).json({'error': "Please provide a name and a title!"});
  } else  if(name === undefined) {
    res.status(400).json({'error': "Please provide a name!"});
  } else if(title === undefined) {
    res.status(400).json({'error': "Please provide a title!"});
  } else {
    res.json(welcomeMessage);
  }
});

app.get('/appenda/:appendable', (req, res) => {
  let appendable = req.params.appendable;

  const appenda = {
    'appended': `${appendable}a`
  };

    res.json(appenda);
});
/*
app.get('/appenda', (req, res) => {
  res.status(404).send({'error': 'Please provide an appendable text!'});
});*/

app.listen(PORT, () => {
  console.log(`Listening port: ${PORT}.`);
});