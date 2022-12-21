'use strict';

const express = require('express');
const app = express();
const PORT = process.env.PORT || 3001

app.get('/', (req, res, next) => {
  res.status(200).send('Hello World from our Cloud Server');
});

app.get('/hello', (req, res, next) => {
  res.status(200).send('WELL HELLO THERE')
})

app.listen(PORT, () => console.log('listening on port', PORT));
