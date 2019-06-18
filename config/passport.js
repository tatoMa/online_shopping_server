const GoogleStrategy = require('passport-google-oauth20').Strategy
const mongoose = require('mongoose')
require('dotenv').config()
// Load user model
require('../models/user')
const User = mongoose.model('user')

module.exports = function(passport) {
  passport.use(
    new GoogleStrategy(
      {
        clientID: process.env.GOOGLE_CLIENT_ID,
        clientSecret: process.env.GOOGLE_CLIENT_SECRET,
        callbackURL: '/auth/google/callback',
        proxy: true
      },
      (accessToken, refreshToken, profile, done) => {
        // console.log(accessToken)
        // console.log(profile)

        const newUser = {
          googleID: profile.id,
          firstName: profile.name.givenName,
          lastName: profile.name.familyName,
          email: profile.emails[0].value,
          image: profile.photos[0].value
        }

        // Check for existing user
        User.findOne({
          googleID: profile.id
        }).then(user => {
          if (user) {
            // Return user
            done(null, user)
          } else {
            // Create user
            new User(newUser).save().then(user => done(null, user))
          }
        })
      }
    )
  )

  passport.serializeUser((user, done) => {
    done(null, user.id)
  })

  passport.deserializeUser((id, done) => {
    User.findById(id).then(user => done(null, user))
  })
}