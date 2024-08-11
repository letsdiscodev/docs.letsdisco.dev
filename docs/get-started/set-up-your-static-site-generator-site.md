---
sidebar_position: 6
---

# Set up your Static Site Generator (SSG)

In this docs you will learn the basics to get your existing static site generator site building on disco and being served by disco. If you have a static site or running apps, refer to these sections instead.

## Overview

At this point, you already have installed the CLI on your computer, installed disco on your server, and you have added your disco Github app with the permissions to your repository on Github.

In this guide, you will have a `Dockerfile` to build your site, and you'll have a `disco.json` file telling disco where to find the files to be served within your image.

### The site before disco

Let's use a very barebone home made site generator as an example.

The repository contains two files:

```
generate.py
requirements.txt
```

The file `requirements.txt` contains our dependencies:
```
markdown2==2.4.13
```

You would install those dependencies locally with:
```bash
pip install -r requirements.txt
```

The file `generate.py` contains the code to generate our site:

```python
import os
import markdown2

DIST_DIR = "dist"
INDEX_MARKDOWN = """
# Home

Hello World

"""

html = f"""<!DOCTYPE html>
<html>
<head>
<meta charset="utf-8">
</head>
<body>
    {markdown2.markdown(md)}
</body>
</html>
"""

if not os.path.isdir(DIST_DIR):
    os.makedirs(DIST_DIR)

with open(f"{DIST_DIR}/index.html", "w", encoding="utf-8") as f:
    f.write(html)
```

You could run it locally with:
```bash
python generate.py
```

### Create your Dockerfile

Static sites generator on disco are built using a `Dockerfile`. 

For this example, in Python, we'll use the official Python image from Docker Hub. Just create a file named `Dockerfile` at the root of your repository.

```Dockerfile
FROM python:3.12.3
WORKDIR /site
COPY . /site
RUN pip install -r requirements.txt
RUN python generate.py
```

See [notes below](#optimizing-the-dockerfile) for some optimizations we can make to speed up builds.

### Create your disco.json

Create a file named `disco.json` at the root of your repository. The `disco.json` file tells disco where to find the files to serve inside the Docker image we just built with the `Dockerfile` above.

```json
{
    "version": "1.0",
    "services": {
        "web": {
            "type": "generator",
            "publicPath": "dist"
        }
    }
}```

The name `web` is a magic name. When disco sees it, it knows that it's the one to use to expose to the internet, create a TLS certificate for HTTPS, etc.

`publicPath` is relative to the `WOKRDIR` in your `Dockerfile`. In our example, the directory `dist` actually means `/app/dist` in our Docker image.


### That's it!

Your site is now ready to be deployed on disco. You can use the CLI to add the project.

```bash
disco projects:add \
    --name first-site \
    --github yourname/reponame \
    --domain first-site.example.com
```

And now, every time you `git push` new commits, disco will deploy the site automatically.

You can see the deployment output with:
```bash
disco deploy:output --project first-site
```

### Optimizing the Dockerfile

In the section [Create your Dockerfile](#create-your-dockerfile), to keep it simpler, we just copied the whole app to the image and then installed the dependencies.

While it works, we're not using Docker's build cache to its full extend. When we're copying files to a Docker image, Docker will use the fact that files changed or not to decide if it needs to execute that part of the `Dockerfile`. In other words, if we copy the whole app to the image, chances are that every time we deploy, something changed and we'll go through the whole build.

If we start by copying files that are less likely to change and have a big impact on build time, we can speed up builds quite a bit. In our case, if we copy the `requirements.txt` file first, and install the dependencies, it means that each time we deploy, if nothing changed in `requirements.txt`, Docker will just use the dependencies from the cache and not try to download them again.

```Dockerfile
FROM python:3.12.3
WORKDIR /site
# copy the files describing our dependencies first
COPY ./requirements.txt /site/requirements.txt
# install the dependencies
RUN pip install -r requirements.txt
# then copy the rest of the site
COPY . /site
# then build your site
RUN python generate.py
```
