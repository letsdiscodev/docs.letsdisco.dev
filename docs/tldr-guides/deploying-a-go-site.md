---
sidebar_position: 3
---

# Deploying a Go Site

- install the disco CLI
- you need a domain
- you need a digital ocean droplet
- run `disco init root@(SERVER IP)`
- fork [this repo](https://github.com/letsdiscodev/example-go-site)

```bash
disco projects:add \
    --name my-go-site \
    --github-repo git@github.com:USERNAME/REPO.git \
    --domain DOMAINNAME
```

- make an empty commit and git push:

```bash
git commit --allow-empty -m "Empty-Commit"
git push
```

- you should be live!