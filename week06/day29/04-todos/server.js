'use strict';

const express = require('express');
const app = express();
const PORT = 3000;

app.set('view engine', 'ejs');

const todosArray = ['get up', 'survive', 'go back to bed'];

app.get('/', (req, res) => {
  res.render('todostemplate', {todos: todosArray});
});

app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}`);
});