const mongoose = require('mongoose');
const db = require('./db/index.js');
const faker = require('faker');

var createHotSpots = () => {
  const tags = ['Events', 'Food', 'Sites', 'Clubs', 'Bars'];
  const city = ['San Francisco', 'Los Angeles', 'Toronto', 'San Diego', 'New York'];

  for(let i = 0; i <= 100; i++) {
    var hotSpots = {};
    hotSpots.name = faker.lorem.words();
    hotSpots.description = faker.lorem.sentence();
    hotSpots.votes = faker.random.number();
    hotSpots.image = faker.image.nightlife();
    hotSpots.tags = `${tags[Math.floor(Math.random()* (5))]}`;
    hotSpots.city = `${city[Math.floor(Math.random()* (5))]}`;

    db.HotSpots.create(hotSpots, function(err) {
      if(err) {
        console.log(err);
      }
    })
  }
}
createHotSpots();