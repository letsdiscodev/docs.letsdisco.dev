---
sidebar_position: 3
sidebar_class_name: hidden
---

# New Barely Documented Commands

### Move a project from one server to another

This copies a project to a different server, including its name, Github repo URL, domain, TLS certificate to avoid downtime, SSH deploy key, env variables, and deployment number. It then deploys. You just need to point the DNS to the new server.

```bash
disco projects:move --project dummy --from-disco 123.123.123.123 --to-disco 234.234.234.234
disco projects:move --project dummy --from-disco disco.my-server-one.com --to-disco disco.my-server-two.com
```

### List a project's volumes

```bash
disco volumes:list --project dummy
```

### Volume export

This exports a volume to a .tar.gz file. You can then import it on another project.

```bash
disco volumes:export --project dummy --volume dummy-data > ~/dummy-data.tar.gz
disco volumes:export --project dummy --volume dummy-data | tar --extract --gunzip --file -
```

### Volume import & export-to-import

```bash
disco volumes:import --project dummy --volume dummy-data < ~/dummy-data.tar.gz
disco volumes:export --project dummy --volume dummy-data --disco disco.server-one.com | disco volumes:import --project dummy --volume dummy-data --disco disco.server-two.com
```

### Configure a domain name for the server

```bash
disco meta:host disco.my-server.com
```

To get the current server info:

```bash
disco meta:info
```

### List and remove API keys

```bash
disco apikeys:list
disco apikeys:remove 6c8d4caeb75e0712d331e32f3b78d2b1
```

### Create and accept invites to get API keys

```bash
disco invite:create "Dave Doe"
disco invite:accept https://disco.server-one.com/.disco/api-key-invites/76fa0b63d569c48529c311fd703159c0
# see the API key only, without adding it to your local .disco config
disco invite:accept https://disco.server-one.com/.disco/api-key-invites/76fa0b63d569c48529c311fd703159c0 --show-only
```
