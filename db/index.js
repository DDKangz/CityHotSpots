const mongoose = require('mongoose');

const db = mongoose.connection;
mongoose.connect('mongodb://localhost/hotspots', {useNewUrlParser: true});

db.on('error', () => {
  console.log('mongoose connection error');
});

db.once('open', () => {
  console.log('mongoose connected successfully');
});

const hotspotSchema = new mongoose.Schema({
  name: String,
  description: String,
  votes: Number,
  image: String,
  tags: String,
  city: String,
});

const HotSpots = mongoose.model('hotspots', hotspotSchema);

module.exports = {
  HotSpots: HotSpots
}