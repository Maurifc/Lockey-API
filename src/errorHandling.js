const JsonWebTokenError = require('jsonwebtoken').JsonWebTokenError
const CastError = require('mongoose').CastError

module.exports = (error, req, res, next) => {
    let errorStatus = 500
    let message = ''

    switch (error.name) {
        case 'JsonWebTokenError':
            errorStatus = 401
            break;

        case 'CastError':
            message = 'Invalid user id'
            errorStatus = 400
            break
    
        default:
            message = error.message
            errorStatus = 500
            break;
    }

    res.status(errorStatus).send({ message: message })
    next()
}