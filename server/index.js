const express = require('express');
const eventsController = require('./eventsController');

const app = express();
app.use(express.json()); //this add the body object to req ie req.body

app.get('/api/getEvents', eventsController.getEvents)
app.get('/api/searchForEvent', eventsController.searchForEvent)
app.put('/api/swapEventPosition', eventsController.swapEventPosition)

app.listen(8080, () =>
  console.log(`Listening on port ${8080}`)
);