const express = require('express');
const bodyParser = require('body-parser');
const db = require('../db/index.js');


const app = express();
const PORT = 3000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

app.use(express.static(__dirname + '/../client/dist'));

app.get('/hotspots/:city/:tags', (req, res) => {
  console.log(req.params.tags);
  if(req.params.tags === 'All') {
    db.HotSpots.find({city: `${req.params.city}`}, (error, data) => {
      console.log(req.params.city);
      if(error) {
        res.status(500).send(error);
      } else {
        res.status(200).send(data);
      }
    })
  } else {
    db.HotSpots.find({city: `${req.params.city}`, tags: `${req.params.tags}`}, (error, data) => {
      console.log(req.params.city, ':', req.params.tags);
      if(error) {
        res.status(500).send(error);
      } else {
        res.status(200).send(data);
      }
    })
  }
})


app.listen(PORT, () => {
  console.log(`listening on port ${PORT}`);
});