---
sidebar_position: 3
---

# Deploying a Flask + SQLite Site

- same first steps as [deploying a flask site](../deploying-a-flask-site)
- [use this sample repo](https://github.com/letsdiscodev/example-flask-sqlite-site)
- deploy it using `disco project:add ...`
- run a script to create the database:

```bash
disco run --project PROJECTNAME "bash initdb.sh"
```

- you're done! `git push` to release new version. visit your domain in a web browser to see a sqlite3-backed visitor counter.