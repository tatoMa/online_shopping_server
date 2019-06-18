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

router.post('/login/', (req, res) => {
  //   const { name, email } = req.body
  User.find({ name: req.body.name }).then(user => {
    // console.log(user)
    // res.send(user[0].email + req.body.email)
    if (JSON.stringify(user[0].email) == JSON.stringify(req.body.email)) {
      res.send(user)
    }
    res.send('cant find user')
  })
  //   try {

  //   } catch (error) {
  //     console.log('didnt found the user')
  //   }
})

module.exports = router
