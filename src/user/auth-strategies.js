const passport = require('passport')
const BearerStrategy = require('passport-http-bearer')
const LocalStrategy = require('passport-local')
const User = require('./User')

passport.use(new LocalStrategy(async (username, password, done) => {
    User.findOne({ username: username }, (err, user) => {
        if(err) return done(err) // use done(err) when an unexpected error occurs

        if(!user) return done(null, false) // use done(null, false) when credentials is invalid

        user.comparePassword(password, (err, isMatch) => {
            if(err) return done(err)

            if(!isMatch)
                return done(null, false) // use done(null, false) when credentials is invalid
            
            done(null, user) // return done(null, user) when login succeeds
        })
    })
}))