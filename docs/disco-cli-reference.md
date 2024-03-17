---
sidebar_position: 5
---

# disco CLI reference

### deploy:list

see the list of deployments for a project

```bash
disco deploy:list --project PROJECTNAME
```

### deploy:output

see the output for the latest deployment of your project

```bash
disco deploy:output --project PROJECTNAME
```

### env:list

see the list of your environment variables for a project

```bash
disco env:list --project PROJECTNAME
```

### env:set

set an environment variable for a project

```bash
disco env:set --project sample-django-site MY_ENV_VAR="some value"
```

### init

initializes a server to run the disco daemon

```bash
disco init root@(SERVER-IP)
```

### logs

see the real time logs for your server

```bash
disco logs
```

### projects:add

adds a new project to a server that's been previously initialized with `disco init`

```bash
disco projects:add \
    --name PROJECTNAME \
    --github-repo USERNAME/REPO \
    --domain DOMAINNAME
```

### run

run a bash command within a project

```bash
disco run --project PROJECTNAME "python dbmigrate.py"
```
