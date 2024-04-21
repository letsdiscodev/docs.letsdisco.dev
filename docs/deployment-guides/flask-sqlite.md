---
sidebar_position: 4
---

# Flask + SQLite

<input type="checkbox" /> you will need a domain or subdomain that you control  
<input type="checkbox" /> you will need [a server](http://localhost:3000/get-started/set-up-your-server) that's been set up with disco  
<input type="checkbox" /> you will need the [disco cli](../get-started/install-the-cli)  

---

<input type="checkbox" /> create an `A` record on your domain or subdomain and point it to your server IP  
<input type="checkbox" /> fork the [sample flask site repo](https://github.com/letsdiscodev/example-flask-sqlite-site/fork)  
<input type="checkbox" /> create the disco project (replace *USERNAME*, *REPO* and *DOMAIN*):

```bash
disco projects:add \
    --name my-flask-sqlite-site \
    --github-repo git@github.com:USERNAME/REPO.git \
    --domain DOMAINNAME
```
<input type="checkbox" /> run a script to create the database:  

```bash
disco run --project my-flask-sqlite-site "bash initdb.sh"
```
<input type="checkbox" /> you're done! `git push` to release a new version. visit your domain in a web browser to see a sqlite3-backed visitor counter.