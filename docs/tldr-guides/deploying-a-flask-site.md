---
sidebar_position: 2
---

# Deploying a Flask Site

<input type="checkbox" /> make sure that [disco is installed](../installation)  
<input type="checkbox" /> you will need a domain or subdomain that you control  
<input type="checkbox" /> setup a digital ocean droplet - specifically, anything above a $6 droplet is good. set it up with Ubuntu >23  
<input type="checkbox" /> create an `A` record on your domain or subdomain and point it to your server IP  
<input type="checkbox" /> make sure that you can run `ssh@(server IP)` and login without a password  
<input type="checkbox" /> wait ~2 minutes after the server is available to make sure it's fully setup  
<input type="checkbox" /> run `disco init root@(server IP)`  
<input type="checkbox" /> fork the [example repo](https://github.com/letsdiscodev/example-flask-site/fork)  
<input type="checkbox" /> create the disco project (replace *USERNAME*, *REPO* and *DOMAIN*):

```bash
disco projects:add \
    --name my-flask-site \
    --github-repo git@github.com:USERNAME/REPO.git \
    --domain DOMAINNAME \
```

<input type="checkbox" /> after the previous `disco projects:add ...` command is done, follow the steps to setup the deployment ssh key, and the webhook url  
<input type="checkbox" /> you're done! `git push` from now on to deploy new versions
