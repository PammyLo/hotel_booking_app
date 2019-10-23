const express = require ('express');
const app = express();
const parser = require ('body-parser');
const MongoClient = require('mongodb').MongoClient;
const cors = require ('cors');
const createRouter = require('./helpers/create_router.js');

app.use(cors());
app.use(parser.json());

MongoClient.connect('mongodb://localhost:27017')
  .then(client => {
    const db = client.db('hotel_bookings');
    const bookingsCollection = db.collection('bookings');
    const bookingsRouter = createRouter(bookingsCollection);
    app.use('/api/bookings', bookingsRouter);
  });

app.listen(3000, function() {
  console.log(`listening on port ${this.address().port}`);
});
