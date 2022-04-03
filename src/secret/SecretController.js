const vault = require('../config/vault')

class SecretController{
    static getByPath(req, res) {
        res.send('Reading secret from following path: ' + req.params[0])
    }

    static list(req, res){
        res.send('List all secrets')
    }
}

module.exports = SecretController