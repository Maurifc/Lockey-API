const router = require('express').Router()
const SecretController = require('./SecretController')

router
    .get('/secret/*', SecretController.getByPath)
    .get('/secret', SecretController.list)

module.exports = router