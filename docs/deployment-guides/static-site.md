---
sidebar_position: 1
---

# Static Site

### Pre-requisites

You will need a domain name for your project, the [disco CLI tool](/get-started/install-the-cli) and a server [initialized with disco](/get-started/set-up-your-server).

### Steps

- Create an `A` record for your domain (or subdomain) and point it to your server's IP address.
- [Fork the example repo](https://github.com/letsdiscodev/example-static-site/fork)
- Add the project to your server by running the command below:

```bash
disco projects:add \
    --name my-static-site \
    --github-repo git@github.com:USERNAME/REPONAME.git \
    --domain DOMAINNAME
```

above, replace:
- the `USERNAME/REPONAME` with the path to your GitHub repo (e.g., `john/my-project`)
- `DOMAINNAME` with the domain you wish to deploy your project to (e.g., `static.example.com`)

:::tip

After running `disco projects:add ...`, you will be asked to:
- add a deployment key to your GitHub repo, and
- setup a webhook

Follow the instructions that are displayed in the terminal.

:::

### Deploy your project

You're finally ready to deploy your project and see it live! Make sure that you're in the directory containing your project's code. Push your code to GitHub:

```bash
git push
```

:::info

If you have nothing to commit, make an empty commit first:

```bash
git commit --allow-empty -m "empty commit"
```

and then `git push`

:::

Your project will start deploying to your server. You can follow along the build output by running:

```bash
disco deploy:output --project my-static-site
```

Once deployed, go to your domain name. Your site should be there!
