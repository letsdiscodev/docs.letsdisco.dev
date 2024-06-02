# Django

import DeploymentGuide from '@site/src/components/DeploymentGuide';

<DeploymentGuide
  repo="letsdiscodev/example-django-site"
  exampleProjectName="my-django-site"
  someProps="test"
>

### Final steps

We need to run 2 commands so that the deployed project can work. To do so, run:

```bash
# generate a secret key, for example using `uuidgen`, and then set it as DJANGO_SECRET_KEY:
disco env:set --project my-django-site DJANGO_SECRET_KEY="... secret value ..." \
    DATABASE_URL="sqlite:////sqlitedata/db.sqlite3"
disco run --project my-django-site "python manage.py migrate"
```

</DeploymentGuide>

