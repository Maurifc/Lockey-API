const mongoose = require('mongoose')
const bcrypt = require('bcrypt')
const SALT = 12

const userSchema = new mongoose.Schema({
    username: String,
    password: String,
    email: String
});

userSchema.pre('save', function(next){
    var user = this

    if(!user.isModified('password')) return next() // Only hashed password if it has changed

    bcrypt.genSalt(SALT, function(err, salt) {
        if(err) return next(err)

        bcrypt.hash(user.password, salt, function(err, hash){
            if(err) return next(err)

            user.password = hash
            next()
        })
    })
})

userSchema.methods.comparePassword = function(candidatePassword, cb){
    bcrypt.compare(candidatePassword, this.password, (err, isMatch) => {
        if(err) return cb(err)

        cb(null, isMatch)
    })
}

const User = mongoose.model('User', userSchema)

module.exports = User