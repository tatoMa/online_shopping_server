const express = require('express')
require('dotenv').config()
const mongoose = require('mongoose')

const app = express()

mongoose.connect(process.env.DB_URI, { useNewUrlParser: true })

var db = mongoose.connection
db.on('error', error => console.error(error))
db.once('open', () => console.log('DB is connected'))

app.listen(process.env.PORT, () => {
  console.log(`server started on ${process.env.PORT}`)
})
