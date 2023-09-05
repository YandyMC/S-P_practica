const restana = require('restana')
const mongoose = require('mongoose')
const cors = require('cors')
const parser = require('body-parser')
const service = restana()
service.use(cors())
service.use(parser.json())
const {cliente, Habitacion, hotel, resena, reserva} = require('./models');


mongoose.connect(
    `mongodb://${process.env.MONGODB_USERNAME}:${process.env.MONGODB_PASSWORD}mongodb+srv://admin:12345@hotel.tk6bla6.mongodb.net/`,
    {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    },
    (err) => {
      if (err) {
        console.error('FAILED TO CONNECT TO MONGODB');
        console.error(err);
      } else {
        console.log('CONNECTED TO MONGODB!!');
        app.listen(80);
      }
    }
  );