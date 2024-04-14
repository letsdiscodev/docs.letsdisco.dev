---
sidebar_position: 8
---

# Go

### Pre-requisites

- you need to install the [disco CLI](../installation.md) on your development machine
- you need a domain name
- you need a server from Digital Ocean or Hetzner

### Steps

- point the domain name to the server's IP address
- run `disco init root@(SERVER IP)`
- fork [this repo](https://github.com/letsdiscodev/example-go-site)
- create a new disco project:

```bash
disco projects:add \
    --name my-go-site \
    --github-repo git@github.com:USERNAME/REPO.git \
    --domain DOMAINNAME
```

- follow the steps in the `projects:add` command output to add the deployment key + webhook to your GitHub repo

- make an empty commit and git push:

```bash
git commit --allow-empty -m "Empty-Commit"
git push
```

- you should be live! 🚀

