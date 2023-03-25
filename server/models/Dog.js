const mongoose = require('mongoose');

let DogModel = {};

const DogSchema = new mongoose.Schema({
  name: {
    type: String,
    require: true,
    trim: true,
    unique: true,
  },
  breed: {
    type: String,
    require: true,
    trim: true,
  },
  age: {
    type: Number,
    require: true,
    min: 0,
  },
  dateCreated: {
    type: Date,
    default: Date.now(),
  },
});

DogModel = mongoose.model('Dog', DogSchema);

module.exports = DogModel;
