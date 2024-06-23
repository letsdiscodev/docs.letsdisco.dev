---
sidebar_position: 4
---

# PostgreSQL

Disco provides a "good enough" Postgres addon.

## Good Enough

The Postgres addon is a great way to quickly have access to Postgres when Postgres is not mission critical to your system. If you need any non-basic features, like replication, automatic failover, monitoring, automatic backups and restore, etc. you should use a more serious solution, like a managed Postgres.

## TL;DR

```bash
# install the addon
disco postgres:addon:install
# ... shows deployment output
disco postgres:instances:add
# ... shows deployment output
disco postgres:instances:list
# ...shows the instance name, e.g.: nuclear-rabbit
disco postgres:database:add --instance nuclear-rabbit
# ... shows the database name, e.g.: ms6y0semmct194hs
disco postgres:database:attach \
    --instance nuclear-rabbit \
    --database ms6y0semmct194hs \
    --project my-project
```

The last command (`postgres:database:attach`) will add an environment variable to `my-project` named `DATABASE_URL` that looks something like this:

```
postgresql://t43ugkmyi1fi8qok:mRp0CMSaN13FPAYz@postgres-instance-nuclear-rabbit-postgres/ms6y0semmct194hs
```

## In More Details

### Installing the Addon on your Server
You can install the addon with

```bash
disco postgres:addon:install
```

This will create a project called `postgres-addon`. This project is not a Postgres instance. It's a project that will manage Postgres instances.

### Adding a Postgres Instance

Once you have installed the addon, you can add an instance.

You generally need only one Postgres Instance, where you can add many databases. First you need to add a Postgres instance.

```bash
disco postgres:instances:add
```
This will create a project called `postgres-instance-nuclear-rabbit`, where `nuclear-rabbit` is a generated name that will be different in your case.

You can see your instances (usually a single one) with 
```bash
disco postgres:instances:list
```

This will output `nuclear-rabbit`.

### Adding a Database to an Instance

Once you have added an instance, you can databases to it.

```bash
disco postgres:database:add --instance nuclear-rabbit
```

It should output the name of the database, like `ms6y0semmct194hs`. You can retrieve the list of databases later with
```bash
disco postgres:database:list --instance nuclear-rabbit
```

### Attaching a Database to a Project

So far, you installed the addon, added a Postgres instance and created a database. But this database is not really usable yet because it's not attached to a project.

You can attach it to your project with

```bash
disco postgres:database:attach \
    --instance nuclear-rabbit \
    --database ms6y0semmct194hs \
    --project my-project
```

When attaching a database to a project, a new user/password will be created and given access to the database. And then an environment variable `DATABASE_URL` will be set with the connection string that uses those new credentials.

The variable looks like this:
```
postgresql://t43ugkmyi1fi8qok:mRp0CMSaN13FPAYz@postgres-instance-nuclear-rabbit-postgres/ms6y0semmct194hs
```

And you can retrive it by running:
```bash
disco env:get DATABASE_URL --project my-project
```

You can choose another environmnent variable by passing `--env-var VAR_NAME`:

```bash
disco postgres:database:attach \
    --instance nuclear-rabbit \
    --database ms6y0semmct194hs \
    --project my-project \
    --env-var OTHER_DATABASE_URL
```

You can attach many databases to a single project. And you can attach the same database to many projects. Just make sure to avoid environment variable name collisions. E.g. if `DATABASE_URL` is already taken in a project, specify another variable name with `--env-var`.

### Remote Access

As you saw in the `DATABASE_URL` value, the hostname was `postgres-instance-nuclear-rabbit-postgres`. It's not exposed to the internet. It's only accessible to the projects running on your Disco installation.

If you want to access it remotely, from your laptop for example, you can create a temporary tunnel.

```bash
disco postgres:tunnel --project my-project
```
or if you have many attachments for that project, you can specify which one with
```bash
disco postgres:tunnel \
    --project my-project \
    --env-var OTHER_DATABASE_URL
```

It will create a tunnel that binds to `localhost`. You can then use Postgres clients locally, like `pgcli` to connect to it. Just copy paste the connection string that `postgres:tunnel` output.

By default, `postgres:tunnel` will try to use the port `5432` locally, but if it's already used by another service, it will let the OS assign another port. If you want to specify which port to use, you can pass `--port PORT`, e.g.:

```bash
disco postgres:tunnel --project my-project --port 45345
```

### Updating the Addon

To update the addon, run:

```bash
disco postgres:addon:update
```

This will update the addon. This will not upgrade the instances. E.g. if you installed Postgres 16.2, this will not update them to Postgres 16.3.
