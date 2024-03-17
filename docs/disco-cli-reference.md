---
sidebar_position: 5
---

# disco CLI reference

### init

initializes a server to run the disco daemon

```bash
disco init root@(SERVER-IP)
```

### deploy:list

see the list of deployments for a project

```bash
disco deploy:list --project PROJECTNAME
```

### deploy:output

see the output for a particular deployment. get the list of deployments for a project using `disco deploy:list`

```bash
disco deploy:output --project PROJECTNAME --deployment DEPLOYMENTNUMBER
```

### logs

see the real time logs for a project

```bash
disco logs --project PROJECTNAME
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

run a command on a remote server

```bash
disco run --project PROJECTNAME "ls -la"
```
