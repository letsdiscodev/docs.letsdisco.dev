---
sidebar_position: 2
---

# Set up your Server

You will need a server (VPS, or a Raspberry Pi) to deploy your projects to. It's best to use a dedicated machine for disco. If you don't have one, [obtain one](/misc/get-a-server) and come back here.

It should run the latest Ubuntu Server LTS. Currently Ubuntu Server 24.04.

You will also need a dedicated domain name for the server itself (in addition to any domains for the projects you will be deploying). We recommend using a subdomain, for example `server.yourdomain.com`.

## Step One: disco init

Once you've installed the CLI on your local development machine, we will initialize your server. For this, you run `disco init` on your computer and pass it the ssh `USER@DOMAIN` combination that the CLI will use to connect to your server.

**NOTE**: you need to run this command on *your* computer, not on your server. ie, install the `disco` CLI and run all of the commands below on your development machine.

For example, if the user is `root` and the domain is `disco.example.com`:

```bash
disco init root@disco.example.com
```

## Step Two: Add the Github app

Once disco is installed, it will need to be connected to Github. Run:

```bash
disco github:apps:add
```

It will open a browser with the flow to create a Github app that will be connected to your server.

Give it a name that's meaningful to you, about this server, or leave the generated name. You can change it later.

And then, you need to select which repositories you want to give it access to. You can change this later as well.

If your repo exists within a GitHub organization account, you must pass in the organization username to the disco command:

Run
```bash
disco github:apps:add --organization bigtechcorp
```
