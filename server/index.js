const express = require('express');
const eventsController = require('./eventsController');

const app = express();
app.use(express.json());



app.listen(8080, () =>
  console.log(`Listening on port ${8080}`)
);