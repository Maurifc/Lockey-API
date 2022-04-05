const vault = require('../config/vault')

function getSecretWithoutMetadata(secret){
    return secret.data.data
}

class Secret{
    // TODO: return ttl too
    static async get(vaultToken, path){
        const vaultInstance = vault.getInstance(vaultToken)
        const rawSecret = await vaultInstance.read(path)
        
        const secretWithoutMetada = getSecretWithoutMetadata(rawSecret)
        return secretWithoutMetada        
    }

    //TODO: Implement secret listing
    static async list(path='/secret'){
        // const list = await vault.list(path)
        return []
    }
}

module.exports = Secret