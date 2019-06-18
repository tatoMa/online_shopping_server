const mongoose = require('mongoose')

// create a new schema for user
const user = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true
  },
  img: String,
  date: {
    type: Date,
    default: Date.now
  }
})

// use user schema for user model
mongoose.model('user', user)
