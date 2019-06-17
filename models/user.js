const mongoose = require('mongoose')

const user = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true
  },
  img: String
})

mongoose.model('user', user)
