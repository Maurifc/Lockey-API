const router = require('express').Router()

router
    .get('/users', (req, res) => {
        res.send('Return all users')
    } )

module.exports = router