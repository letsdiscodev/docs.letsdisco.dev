---
sidebar_position: 6
---

# Hugo

### Pre-requisites

You will need a domain name for your project, the [disco CLI tool](/get-started/install-the-cli) and a server [initialized with disco](/get-started/get-a-server).

### Steps

- Create an `A` record for your domain (or subdomain) and point it to your server's IP address.
- Fork [this example Hugo repo](https://github.com/letsdiscodev/example-hugo-site)
- Add the project to your server by running the command below:

```bash
disco projects:add \
    --name my-hugo-site \
    --github-repo git@github.com:USERNAME/REPO.git \
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

- Make an empty commit and push to GitHub:

```bash
git commit --allow-empty -m "Empty-Commit"
git push
```

- You should be live! 🚀
