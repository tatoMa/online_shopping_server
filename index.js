const express = require('express')
require('dotenv').config()
const mongoose = require('mongoose')

// import routes
const user = require('./routes/user')

const app = express()
app.use(express.json())

mongoose.connect(process.env.DB_URI, { useNewUrlParser: true })

var db = mongoose.connection
db.on('error', error => console.error(error))
db.once('open', () => console.log('DB is connected'))

app.get('/', (req, res) => {
  console.log('running')
})

app.use('/user', user)

app.listen(process.env.PORT, () => {
  console.log(`server started on ${process.env.PORT}`)
})
