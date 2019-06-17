const express = require('express')
const mongoose = require('mongoose')

const router = express.Router()

// import models
require('../models/user')
const User = mongoose.model('user')

router.get('/', (req, res) => {
  User.find().then(users => {
    res.send(users)
  })
})

router.post('/', (req, res) => {
  const newUser = new User({
    name: req.body.name,
    email: req.body.email,
    img: req.body.img || ''
  })
  newUser.save()
})

module.exports = router
