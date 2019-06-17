const express = require('express')
require('dotenv').config()
const mongoose = require('mongoose')

require('./models/user')
const User = mongoose.model('user')

const app = express()
app.use(express.json())

mongoose.connect(process.env.DB_URI, { useNewUrlParser: true })

var db = mongoose.connection
db.on('error', error => console.error(error))
db.once('open', () => console.log('DB is connected'))

app.get('/', (req, res) => {
  //   res.send(User.find())
  User.find().then(users => {
    console.log(users)
  })
})

app.listen(process.env.PORT, () => {
  console.log(`server started on ${process.env.PORT}`)
})
