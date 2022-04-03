const Secret = require('./Secret')

class SecretController{
    static async getByPath(req, res, next) {
        const secretPath = req.params[0] // Get url that comes after http://host/secret/*
        try {
            const secret = await Secret.get(secretPath)
    
            res.send(secret)            
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