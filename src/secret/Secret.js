const vault = require('../config/vault')

class Secret{
    // TODO: return ttl too
    static async get(path){
        const secret = (await vault.read(path)).data.data
        return secret        
    }

    //TODO: Implement secret listing
    static async list(path='/secret'){
        // const list = await vault.list(path)
        return []
    }
}

module.exports = Secret