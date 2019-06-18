// import all needed libiaries
const express = require('express')
require('dotenv').config()
const mongoose = require('mongoose')
const cors = require('cors')
const passport = require('passport')
const path = require('path')

// Passport Config
require('./config/passport')(passport)

// load routes
const user = require('./routes/user')
const auth = require('./routes/auth')
const post = require('./routes/post')

// init express server
const app = express()

// Middlewares
app.use(express.json())
app.use(cors())
app.use(passport.initialize())
app.use(passport.session())

// mongoose connect
mongoose
  .connect(process.env.DB_URI, {
    useNewUrlParser: true
  })
  .then(() => console.log('MongoDB Connected'))
  .catch(err => console.log(err))

app.get(
  '/login',
  passport.authenticate('oauth2', {
    session: true,
    successReturnToOrRedirect: '/'
  })
)

app.get('/', (req, res) => {
  console.log('running')
})

// use routes
app.use('/user', user)
app.use('/auth', auth)
app.use('/posts', post)

// listen port
app.listen(process.env.PORT, () => {
  console.log(`server started on ${process.env.PORT}`)
})
