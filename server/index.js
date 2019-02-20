const express = require('express');
const massive = require('massive');
const session = require('express-session')
require('dotenv').config();

const app = express();

const CONNECTION = process.env.CONNECTION

app.use(express.json());
app.use(session({
  secret: 'klsglkshjflksjfl',
  resave: false,
  saveUninitialized: true,
  cookie: {
    maxAge: 1000 * 60 * 60
  }
}))

massive(CONNECTION).then( db => {
  app.set('db', db)
  console.log('db connected')
  
  const eventsController = require('./eventsController');
  app.get('/api/getEvents', eventsController.getEvents);
  app.get('/api/searchForEvent', eventsController.searchForEvent);
  app.post('/api/createEvent', eventsController.createEvent)

  const authController = require('./authController');
  app.get('/api/isLoggedIn', authController.isLoggedIn)
  app.post('/api/login', authController.login)


  app.listen(8080, () =>
    console.log(`Listening on port ${8080}`)
  );
})
