---
sidebar_position: 1
---

# Scaling Horizontally

:::warning

This is all subject to change. You should be comfortable with other parts of disco before attempting this. Have fun :-)

:::

The example below scales our sample "dummy" project to two nodes (i.e. servers).

Note: `DOMAINNAME-FOR-REGISTRY` should point to the `SERVER1-IP` and be different than the `DOMAINNAME` for the dummy project.


```bash
disco init root@SERVER1-IP --version 0.2.0.dev1
disco nodes:add root@SERVER2-IP --version 0.2.0.dev1
disco projects:add \
    --name registry \
    --github-repo https://github.com/letsdiscodev/disco-addon-docker-registry.git \
    --domain DOMAINNAME-FOR-REGISTRY \
    --deploy
disco command registry init

# deploy your project with `web` and `worker` processes
disco projects:add --name dummy \
    --github-repo git@github.com:USER/REPO.git \
    --domain DOMAINNAME 

# you can optionally add postgres
disco projects:add \
    --name postgres \
    --github-repo https://github.com/letsdiscodev/disco-addon-postgres \
    --deploy
disco command postgres db:add --project dummy

# if deploying postgres, run pgcli (see below) and then any commands you need to setup your database
pgcli $(disco env:get --project dummy DATABASE_URL)

disco deploy --project dummy
disco scale --project dummy web=2 worker=2
```

