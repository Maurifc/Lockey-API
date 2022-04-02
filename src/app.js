const express = require('express')
const router = require('./config/router')
require('./config/dbConnect')
require('./user/authStrategies')
require('dotenv').config()

const app = express()

app.use(express.json())

router(app)

module.exports = app