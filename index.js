// import all needed libiaries
const express = require('express')
require('dotenv').config()
const mongoose = require('mongoose')

// import routes
const user = require('./routes/user')

// init express server
const app = express()

// use json body parser
app.use(express.json())

// mongoDB connection
mongoose.connect(process.env.DB_URI, { useNewUrlParser: true })
var db = mongoose.connection
db.on('error', error => console.error(error))
db.once('open', () => console.log('DB is connected'))

app.get('/', (req, res) => {
  console.log('running')
})

// use routes
app.use('/user', user)

// listen port
app.listen(process.env.PORT, () => {
  console.log(`server started on ${process.env.PORT}`)
})
