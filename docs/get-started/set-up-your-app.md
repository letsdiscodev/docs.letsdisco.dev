---
sidebar_position: 4
---

# Set up your App

In this docs you will learn the basics to get your existing app running on disco. If you have a static site or a static site generator, refer to these sections instead.

## Overview

At this point, you already have installed the CLI on your computer, installed disco on your server, and you have added your disco Github app with the permissions to your repository on Github.

After this guide, you will have a `Dockerfile` to build the image of your app, and you'll have a `disco.json` file describing how the app should run on disco.

### The app before disco

Let's use a very basic Flask app so that we have something to work with.

We'll use the [Hello World](https://flask.palletsprojects.com/en/3.0.x/quickstart/) app from Flask's documentation.

In your repository, you have 2 files:
```
requirements.txt
hello.py
```

The `requirements.txt` file contains the dependencies to install:
```
flask==3.0.3
```
And we could install those dependencies locally with:

```bash
pip install -r requirements.txt
```

The `hello.py` file contains the basic app:
```python
from flask import Flask

app = Flask(__name__)

@app.route("/")
def hello_world():
    return "<p>Hello, World!</p>"
```

You could run it locally with:

```bash
flask --app hello run
```

As shown in Flask's docs:
```
$ flask --app hello run
 * Serving Flask app 'hello'
 * Running on http://127.0.0.1:5000 (Press CTRL+C to quit)
```

### Create your Dockerfile

Apps on disco run inside Docker containers. We need a Dockerfile to build the image that will be used by those containers. If you've never worked with Docker or `Dockerfile`, the general idea is that the `Dockerfile` will build everything needed to run the app, so that we can use it later to execute the app. You can see it as a `makefile` to build binaries that you'll later use when you want to run the app.

For this example, in Python, we'll use the official Python image from Docker Hub. Just create a file named `Dockerfile` at the root of your repository.

```Dockerfile
FROM python:3.12.3
WORKDIR /app
COPY . /app
RUN pip install -r requirements.txt
```

See [notes below](#optimizing-the-dockerfile) for some optimizations we can make to speed up builds.

### Create your disco.json

Create a file named `disco.json` at the root of your repository. The `disco.json` file tells disco how to run your app.

One note is that services have to be accessible from the outside. See [Externally Visible Server](https://flask.palletsprojects.com/en/3.0.x/quickstart/#public-server) in Flask's docs. While the flag `--host=0.0.0.0` is Flask specific, the concept applies to most apps: it may bind to `127.0.0.1` (`localhost`) by default, meaning only requests coming from "inside" would be able to reach the app. This is a great default for developping on your computer, but to deploy your application, it needs to be accessible from the outside, so that the reverse proxy in front of your app can talk to it.

```json
{
    "version": "1.0",
    "services": {
        "web": {
            "command": "flask --app hello --host=0.0.0.0 run",
            "port": 5000
        }
    }
}
```

The name `web` is a magic name. When disco sees it, it knows that it's the one to use to expose to the internet, create a TLS certificate for HTTPS, etc.

### That's it!

Your app is now ready to be deployed on disco. You can use the CLI to add the project.

```bash
disco projects:add \
    --name first-app \
    --github yourname/reponame \
    --domain first-app.example.com
```

And now, every time you `git push` new commits, disco will deploy the app automatically.

You can see the deployment output with:
```bash
disco deploy:output --project first-app
```

And you can stream the logs of your app with:
```bash
disco logs --project first-app
```

### Optimizing the Dockerfile

In the section [Create your Dockerfile](#create-your-dockerfile), to keep it simpler, we just copied the whole app to the image and then installed the dependencies.

While it works, we're not using Docker's build cache to its full extend. When we're copying files to a Docker image, Docker will use the fact that files changed or not to decide if it needs to execute that part of the `Dockerfile`. In other words, if we copy the whole app to the image, chances are that every time we deploy, something changed and we'll go through the whole build.

If we start by copying files that are less likely to change and have a big impact on build time, we can speed up builds quite a bit. In our case, if we copy the `requirements.txt` file first, and install the dependencies, it means that each time we deploy, if nothing changed in `requirements.txt`, Docker will just use the dependencies from the cache and not try to download them again.


```Dockerfile
FROM python:3.12.3
WORKDIR /app
# copy the files describing our dependencies first
COPY ./requirements.txt /app/requirements.txt
# install the dependencies
RUN pip install -r requirements.txt
# then copy the rest of the app
COPY . /app
```
