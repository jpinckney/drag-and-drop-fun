const express = require('express');
const massive = require('massive');
require('dotenv').config();

const app = express();

const CONNECTION = process.env.CONNECTION

app.use(express.json());

massive(CONNECTION).then( db => {
  app.set('db', db)
  
  const eventsController = require('./eventsController');
  app.get('/api/getEvents', eventsController.getEvents);
  app.get('/api/searchForEvent', eventsController.searchForEvent);
  
  app.listen(8080, () =>
    console.log(`Listening on port ${8080}`)
  );
})
