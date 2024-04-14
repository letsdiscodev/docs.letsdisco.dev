---
sidebar_position: 5
---

# Django + PostgreSQL

### Pre-requisites

You will need a domain name for your project, the [disco CLI tool](/get-started/install-the-cli) and a server [initialized with disco](/get-started/get-a-server).

### Setup steps
- Create an `A` record for your domain (or subdomain) and point it to your server's IP address.
- Fork the [sample Django repo](https://github.com/letsdiscodev/example-django-site)
- Create a disco project for the django app:

```bash
disco projects:add \
  --name sample-django-site \
  --github-repo git@github.com:USER/REPO.git \
  --domain DOMAINNAME
```

above, replace:
above, replace:
- the `USERNAME/REPONAME` below with the path to your GitHub repo (e.g., `john/my-project`)
- `DOMAINNAME` with the domain you wish to deploy your project to (e.g., `example.com`)

:::tip

After running `disco projects:add ...`, you will be asked to:
- add a deployment key to your GitHub repo, and
- setup a webhook

Follow the instructions that are displayed in the terminal.

:::

- Install postgres on your server:

```bash
disco projects:add \
    --name postgres \
    --github-repo https://github.com/letsdiscodev/disco-addon-postgres \
    --deploy
```

- Create a database for the django project:

```bash
disco command postgres db:add --project sample-django-site
```

- Set a few env variables on the django project:

```bash
# set this value to a random secret string
disco env:set --project sample-django-site DJANGO_SECRET_KEY=".... SOME SECRET VALUE ..."
# set this value to the site's domain name
disco env:set --project sample-django-site ALLOWED_HOSTS="... DOMAIN ..."
# set this to the password of the django admin user we'll be soon creating
disco env:set --project sample-django-site DJANGO_SUPERUSER_PASSWORD=".... SOME SECURE PASSWORD ..."
disco env:set --project sample-django-site DJANGO_SETTINGS_MODULE="samplesite.settings.prod"
```

- Make disco deploy your django project by creating an empty git commit on the django repository and pushing it to github:

```bash
# change the directory name below with the path to your django project
cd /YOUR/DJANGO/REPO
git commit --allow-empty -m "trigger disco deploy"
git push
```

- Watch the deployment logs:

```bash
disco deploy:output --project sample-django-site
```

- Your site should now be live on your domain, check it out!

- Create the django admin user:

```bash
# replace the email address below with an email address you have access to
disco command sample-django-site web "python manage.py createsuperuser --noinput --username admin --email SOME@EMAIL.COM"
```

- You're done! your site should now be live and you can go to `/admin` and login with your admin account -- `admin` username as set above, and whichever password you set as the `DJANGO_SUPERUSER_PASSWORD`
- Do good work, then `git add`, `git commit` and `git push` -- your new version will be live in a few seconds!
