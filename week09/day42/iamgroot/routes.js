const express = require('express');
const app = express();

app.get('/groot', (req, res) => {
  let message = req.query.message;
  let translatedMessage = {};

  if(message === undefined) {
    res.json({ "error": "I am Groot!" });
  } else {
    translatedMessage.received = message;
    translatedMessage.translated = "I am Groot!";
    res.json(translatedMessage);
  }
});

module.exports = app;