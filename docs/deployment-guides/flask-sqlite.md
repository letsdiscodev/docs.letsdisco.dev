---
sidebar_position: 4
---

# Flask + SQLite

- same first steps as [deploying a flask site](./deploying-a-flask-site)
- [use this sample repo](https://github.com/letsdiscodev/example-flask-sqlite-site) instead
- deploy it using `disco project:add ...`
- run a script to create the database:

```bash
disco run --project PROJECTNAME "bash initdb.sh"
```

- you're done! `git push` to release a new version. visit your domain in a web browser to see a sqlite3-backed visitor counter.