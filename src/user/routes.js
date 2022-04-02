const router = require('express').Router()
const UserController = require('./UserController')

router
    .get('/user', UserController.listAll)
    .get('/user/:id', UserController.getById)
    .post('/user', UserController.create)
    .put('/user/:id', UserController.update)
    .delete('/user/:id', UserController.delete)
    .post('/user/login', UserController.login)

module.exports = router