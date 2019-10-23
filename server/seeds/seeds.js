use hotel_bookings;
db.dropDatabase();

db.bookings.insertMany([
  {
    name: "Mad Hatter",
    email: "mad.hatter@wonderland.com",
    checkedIn: false
  },
  {
    name: "Alice",
    email: "alison@wonderland.com",
    checkedIn: true
  },
  {
    name: "Cheshire Cat",
    email: "cat@smile.com",
    checkedIn: false
  }
]);
