---
sidebar_position: 3
---

# Flask

<input type="checkbox" /> you will need a domain or subdomain that you control  
<input type="checkbox" /> you will need [a server](http://localhost:3000/get-started/get-a-server) that's been set up with disco  
<input type="checkbox" /> you will need the [disco cli](../get-started/install-the-cli)  

---

<input type="checkbox" /> create an `A` record on your domain or subdomain and point it to your server IP  
<input type="checkbox" /> fork the [sample flask site repo](https://github.com/letsdiscodev/example-flask-site/fork)  
<input type="checkbox" /> create the disco project (replace *USERNAME*, *REPO* and *DOMAIN*):

```bash
disco projects:add \
    --name my-flask-site \
    --github-repo git@github.com:USERNAME/REPO.git \
    --domain DOMAINNAME
```

<input type="checkbox" /> after the previous `disco projects:add ...` command is done, follow the steps to setup the deployment ssh key, and the webhook url  
<input type="checkbox" /> you're done! `git push` from now on to deploy new versions
