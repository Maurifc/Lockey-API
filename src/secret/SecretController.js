const Secret = require('./Secret')
const audit = require('./audit')

class SecretController{
    static async getByPath(req, res, next) {
        const secretPath = req.params[0] // Get url that comes after http://host/secret/*
        try {
            const secret = await Secret.get(secretPath)
    
            audit(req.method, req.originalUrl, req.user.username, res.send())
        } catch (error) {
            error.message += ' - Path: ' + secretPath
            next(error)         
        }
    }

    static async list(req, res, next){
        const pathToList = req.params[0] // Get url that comes after http://host/secret/*
        try {
            const list = await Secret.list(pathToList)
            res.send(list)
        } catch (error) {
            next(error)
        }
    }
}

module.exports = SecretController