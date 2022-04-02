const express = require('express')
const router = require('./config/router')
require('./config/dbConnect')
require('./user/auth-strategies')

const app = express()

app.use(express.json())

router(app)

module.exports = app