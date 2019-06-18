const mongoose = require('mongoose')

// create a new schema for user
const user = new mongoose.Schema({
  googleID: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true
  },
  firstName: {
    type: String
  },
  lastName: {
    type: String
  },
  img: {
    type: String
  },
  date: {
    type: Date,
    default: Date.now
  }
})

// use user schema for user model
mongoose.model('user', user)
