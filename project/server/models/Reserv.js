const mongoose = require('mongoose');

const {Schema} = mongoose;



const reservSchema = new Schema({
  name: {
    type: String,
    required: true
  },
  adress: {
    type: String,
    required: true
  },
  lat: {
    type: Number,
    required: true
  },
  lon: {
    type: Number,
    required: true
  },
  ip: {
    type: Number,
    required: true
  }, 
  type: {
    type: String,
    required: true
  },
},
 {
  timestamps: true
})

const Reserv = mongoose.model("Reserv", reservSchema);

module.exports = {
    Reserv,
    reservSchema,
};
