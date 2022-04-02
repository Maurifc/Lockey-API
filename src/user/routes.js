const router = require('express').Router()
const passport = require('passport')
const UserController = require('./UserController')

router
    .get('/user', UserController.listAll)
    .get('/user/:id', UserController.getById)
    .post('/user', UserController.create)
    .put('/user/:id', UserController.update)
    .delete('/user/:id', UserController.delete)
    .post('/user/login', passport.authenticate('local', { session: false }), UserController.login)

module.exports = router