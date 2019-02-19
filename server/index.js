const express = require('express');
const massive = require('massive');
const config = require('./config.js');

const app = express();

app.use(express.json());

massive(config.connection).then( db => {
  app.set('db', db)
  
  const eventsController = require('./eventsController');
  app.get('/api/getEvents', eventsController.getEvents);
  app.put('/api/swapEventPosition', eventController.swapEventPosition);
  app.get('/api/searchForEvent', eventController.searchForEvent);
  
  app.listen(8080, () =>
    console.log(`Listening on port ${8080}`)
  );
})
