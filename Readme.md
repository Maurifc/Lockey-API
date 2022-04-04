# Lockey API

## Project description

API to facilitate teams to retrieve Vault secrets

Basic Features:
- User register and login
- MongoDb to persist user info
- Vault integration: List secrets and get secrets
- Basic roles: Dev and Operations
- Audit Log

**Bonus Features**
- Get Kubernetes credentials (Kubeconf)

## Vault Instructions

Export variables
```bash
export VAULT_ADDR=http://localhost:8200
export VAULT_TOKEN=root
```

Check Vault Status
```bash
vault status
```

Create some sample secrets
```bash
vault kv put /secret/myapp/conf username=admin password=awesomepass
vault kv put /secret/vms/vmprod user=sysadmin password=Awesom3P4ss
vault kv put /secret/vms/vmdev user=dev password=12345678
```

Read content of a secret
```bash
vault kv get /secret/myapp/conf
```

### References:
<https://www.vaultproject.io/docs/commands/kv>