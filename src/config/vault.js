const options = {
    apiVersion: 'v1',
    endpoint: process.env.VAULT_ADDR,
    token: process.env.VAULT_TOKEN
}

const vault = require('node-vault')(options)

vault.status()
    .then((result) => console.log('Connected to Vault server on ' + process.env.VAULT_ADDR))
    .catch((error) => console.log('Failed when connecting to Vault server on ' + process.env.VAULT_ADDR))

module.exports = vault