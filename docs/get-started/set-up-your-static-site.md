---
sidebar_position: 5
---

# Set up your Static Site

In this docs you will learn the basics to get your existing static site being served by disco. If you have static files ready to serve, you're at the right place. If you're looking for static site generators or running apps, have a look at their sections in the docs.

## Overview

At this point, you already have installed the CLI on your computer, installed disco on your server, and you have added your disco Github app with the permissions to your repository on Github.

You already have static files to serve. You just need to tell disco where to find them in your repository, by using a `disco.json` file.

### The site before disco

Let's say you have a folder called `public` that contains an HTML file `index.html`.
```
public
└─── index.html
```

`index.html` is just a basic home page:

```html
<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <title>This is my web site</title>
</head>
<body>
  <p>Deployed with <a href="https://letsdisco.dev/">disco</a>!</p>
</body>
</html>
```

### Create your disco.json

Create a file named `disco.json` at the root of your repository. The `disco.json` file tells disco where to find your files.

```json
{
    "version": "1.0",
    "services": {
        "web": {
            "type": "static",
            "publicPath": "public"
        }
    }
}
```

The name `web` is a magic name. When disco sees it, it knows that it's the one to use to expose to the internet, create a TLS certificate for HTTPS, etc.

`publicPath` is relative to the root of your repository. In our example, the directory `public` sits at the root of the repository.

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

### Security Considerations

It's good practice to serve files from within a directory, and not just the root of your repository. The root of your repository contains files that you should not expose to the internet. For example, the `.git` folder sits there, and `disco.json`. You may have other configuration you should keep private. And if you don't have them now, you may have them in the future. If your files are at the root of the repository, you should create a directory and move them there.
