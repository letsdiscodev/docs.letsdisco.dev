# PostgreSQL

disco provides a "good enough" Postgres addon.

## Introduction

disco provides a "good enough" Postgres addon.

This addon is a great way to quickly setup a database when Postgres is not mission critical to your system. If you need any non-basic features, like replication, automatic failover, monitoring, automatic backups and restore, etc. you should consider using a managed Postgres provider, such as [Neon](https://neon.tech/) or [Supabase](https://supabase.com/).

## How to add Postgres to your project

We assume that you've deployed a project using disco.

Once your project is live, you can run the following command:

```bash
disco postgres:create --project PROJECTNAME
```

replacing `PROJECTNAME` with the name of your project.

This command will provision a Postgres database and attach it to your project. Once it's done, an environment variable named `DATABASE_URL` will be added to your project. This variable will contain the URL to your Postgres database.

---

You can read more about the Postgres addon in the [advanced docs](/docs/exhaustive-documentation/postgresql.md).

