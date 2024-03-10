---
sidebar_position: 1
---

# Deploying a Static Site

### Pre-requisites

- You will need a domain name to deploy your static site to (you can also deploy to a subdomain)
- Make sure that [disco is installed](../installation) on your machine
- Setup a server to deploy disco to

  We recommend signing up to [Digital Ocean](https://www.digitalocean.com/). Then, create a droplet in a region near you running **Ubuntu 23**. A "Regular" $6/month machine is enough to get started.

  Make sure to [setup your private SSH key](https://docs.digitalocean.com/products/droplets/how-to/add-ssh-keys/) on Digital Ocean i.e. you should be able to run `ssh root@(a droplet IP)` and login without any password.

### Initialize your server with disco

If you created a droplet using Digital Ocean, wait at least 2 minutes after it's "done" being created as some auto-upgrade steps can interfere with disco.

Initialize the server:

```bash
disco init root@(IP address of your server)
```

If you haven't connected to the server before initializing it with disco, you will see a `The authenticity of host ... can't be established.` Answer `yes` to proceed.

### Prepare your repo

You can see an [example static project](https://github.com/letsdiscodev/example-static-site): it consists of a [`disco.json`](https://github.com/letsdiscodev/example-static-site/blob/main/disco.json) file with the following contents:

```json
{
    "version": "1.0",
    "services": {
        "web": {
            "type": "static",
            "publicPath": "/dist"
        }
    }
}
```

Most importantly, `publicPath` specifies the directory from which files will be deployed publicly.

Either grab the [`disco.json`](https://github.com/letsdiscodev/example-static-site/blob/main/disco.json) file from the example repository above and copy it into your repo, or [fork the example repo](https://github.com/letsdiscodev/example-static-site/fork).

### Initialize your disco project

Replace:
- the `USERNAME/REPONAME` below with the path to your GitHub repo (e.g., `john/my-project`)
- `DOMAINNAME` with the domain you wish to deploy your static site to (e.g., `static.example.com`)

```bash
disco projects:add \
    --name my-static-site \
    --github-repo git@github.com:USERNAME/REPONAME.git \
    --domain DOMAINNAME \
```

:::tip

After running `disco projects:add ...`, you will be asked to:
- add a deployment key to your GitHub repo and
- setup a webhook

Follow the instructions that are displayed in the terminal.

:::


### Deploy your project

You're finally ready to deploy your project and see it live!

Make sure that you're in the directory containing your project (the one that's on GitHub)

Use git to push your repository to GitHub:

```bash
git push
```

:::info

If you want to force a git push even if you have nothing to commit, run `git commit --allow-empty -m "empty commit"` and then `git push`

:::

Your project will start deploying to your server. You can follow along the build output by running:

```bash
disco deploy:output --project my-static-site --deployment 1
```

Once deployed, go to your domain name. Your site should be there!
