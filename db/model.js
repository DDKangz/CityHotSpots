const mongoose = require('mongoose');
const db = require('./index.js');

const hotspotSchema = mongoose.Schema({
  name: String,
  description: String,
  votes: Number,
  image: Number,
  tags: Array
});

const hotSpots = mongoose.model('hotspots', hotspotSchema);

module.exports = hotSpots;