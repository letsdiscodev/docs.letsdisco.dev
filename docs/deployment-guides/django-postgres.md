# Django + Postgres

*Note: if you're looking for a simpler Django deployment option, consider the [Django + SQLite guide](/deployment-guides/django).*

import DeploymentGuide from '@site/src/components/DeploymentGuide';

<DeploymentGuide
  repo="letsdiscodev/example-django-postgres-site"
  exampleProjectName="my-django-site"
  someProps="test"
>

### Install the Postgres addon

Let's now setup Postgres to run on your disco server. We're in the process of improving these steps, so please bear with us.

```bash
# install the Postgres addon
disco postgres:addon:install

# create a new Postgres instance.
disco postgres:instances:add

# in the output of the command above, you will see
# "Added instance postgres-instance-XXX-YYY" where XXX and YYY are two random words.
# your instance name is "XXX-YYY". note this as it will be used for the command below.

# add a new database to the instance you just created.
disco postgres:databases:add --instance INSTANCENAME

# the command above will also print out an important piece of information:
# the database name. note it as well. we're now ready for the last command:

# finally, attach the database to your project.
# in the command below, replace:
# - INSTANCENAME with the "XXX-YYY" instance name you got previously
# - DATABASENAME with the database name you got from the most recent command
disco postgres:databases:attach \
    --instance INSTANCENAME \
    --database DATABASENAME \
    --project my-django-site
```

### Last steps

We need to run 2 more commands so that the deployed project can work:

```bash
# generate a secret key, for example using `uuidgen`,
# and set it as the DJANGO_SECRET_KEY value below:
disco env:set --project my-django-site \
    DJANGO_SECRET_KEY="... secret value ..."
disco run --project my-django-site "python manage.py migrate"
```

</DeploymentGuide>

