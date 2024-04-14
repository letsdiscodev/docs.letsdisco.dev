---
sidebar_position: 5
---

# Django + PostgreSQL

### Pre-requisites
- you will need a domain name
- start a droplet on digital ocean. make sure that you can ssh into this droplet without a password (i.e. using your ssh key). wait at least 2 minutes after the droplet is ready before continuing.
- if you're setting up a small droplet (with about 1-2 Gb of memory, or if it's approximately $6/month), follow [the instructions to extend your server memory](/misc/extending-your-server-memory).

### Setup steps
- create an A record for your domain pointing to the IP of your server
- setup the server by running `disco init root@(SERVER IP)`
- fork the [django sample site repo](https://github.com/letsdiscodev/example-django-site)
- create a disco project for the django app:

```bash
disco projects:add \
  --name sample-django-site \
  --domain DOMAINNAME \
  --github-repo git@github.com:USER/REPO.git
```

- add the deploy key and webhook to the github setting (per the output of the previous command)

- install postgres on your server:

```bash
disco projects:add \
    --name postgres \
    --github-repo https://github.com/letsdiscodev/disco-addon-postgres \
    --deploy
```

- create a database for the django project:

```bash
disco command postgres db:add --project sample-django-site
```

- set a few env variables on the django project:

```bash
# set this value to a random secret string
disco env:set --project sample-django-site DJANGO_SECRET_KEY=".... SOME SECRET VALUE ..."
# set this value to the site's domain name
disco env:set --project sample-django-site ALLOWED_HOSTS="... DOMAIN ..."
# set this to the password of the django admin user we'll be soon creating
disco env:set --project sample-django-site DJANGO_SUPERUSER_PASSWORD=".... SOME SECURE PASSWORD ..."
disco env:set --project sample-django-site DJANGO_SETTINGS_MODULE="samplesite.settings.prod"
```

- let's cause disco to deploy your django project by doing an empty git commit on the django repository and pushing it to github:

```bash
# change the directory name below with the path to your django project
cd /YOUR/DJANGO/REPO
git commit --allow-empty -m "trigger disco deploy"
git push
```

- watch the deployment logs:

```bash
disco deploy:output --project sample-django-site
```

- your site should now be live on your domain, check it out!

- create the django admin user:

```bash
# replace the email address below with an email address you have access to
disco command sample-django-site web "python manage.py createsuperuser --noinput --username admin --email SOME@EMAIL.COM"
```

- you're done! your site should now be live and you can go to `/admin` and login with your admin account -- `admin` username as set above, and whichever password you set as the `DJANGO_SUPERUSER_PASSWORD`
- do good work, then `git add`, `git commit` and `git push` -- your new version will be live in a few seconds!
