---
sidebar_position: 2
---

# Set up your Server

- You will need a server to deploy your projects to. It's preferrable to use a dedicated machine for disco.
- You will also need a **dedicated domain name** for the server itself (in addition to any domains for the projects you will be deploying).
- We recommend using a subdomain, for example `disco.yourdomain.com`. That dedicated subdomain should point to your server's IP address using an `A` record.


### Hetzner

- sign up for a new [Hetzner](https://www.hetzner.com/) account
- once signed up, go to the [Hetzner Cloud Console](https://console.hetzner.cloud/)
- create a new project if necessary
- click the <b>Add Server</b> button in the upper right corner
- on the "Create a server" page:
  - choose a location near you and/or your users
  - for the operating system, choose <b>Ubuntu</b> and the latest version (24.04 as of this writing)
  - for the type of machine, choose <b>x86 (Intel/AMD)</b>
  - you should be able to pick a machine with as low as 2 Gb of memory ([see the note below on low memory servers](#note-on-servers-with-low-memory))
  - under <b>SSH Keys</b>, select one of your ssh keys. if you haven't configured your ssh keys, click the "Security" tab on the left, then add a key ([see this tutorial on Hetzner](https://community.hetzner.com/tutorials/add-ssh-key-to-your-hetzner-cloud))
- don't forget to set up a dedicated domain or subdomain for the server itself, as in `disco.yourdomain.com` -- point that domain or subdomain to the server's IP address using an `A` record
- after the server has been setup (usually under a minute), run

```bash
# replace `SERVERDOMAIN` below
disco init root@SERVERDOMAIN
```


### Digital Ocean

- sign up for a new [Digital Ocean](https://www.digitalocean.com/) account
- once signed up, go to your account's [dashboard](https://cloud.digitalocean.com/)
- click the <b>Create</b> button in the upper right corner and choose <b>Droplets</b>
- on the "Create Droplets" page:
  - choose a location near you and/or your users
  - for the operating system, choose <b>Ubuntu</b> and the latest version (24.04 as of this writing)
  - for the "Droplet Type", you can pick <b>Basic</b>
  - under "CPU Options", you can pick <b>Regular</b> and a server size with as low as 2 Gb of memory ([see the note below on low memory servers](#note-on-servers-with-low-memory))
  - under "Choose Authentication Method" make sure to pick <b>SSH Key</b> and select one of your ssh keys (see this page on [how to add an ssh key to Digital Ocean](https://docs.digitalocean.com/products/droplets/how-to/add-ssh-keys/))
- don't forget to set up a dedicated domain or subdomain for the server itself, as in `disco.yourdomain.com` -- point that domain or subdomain to the server's IP address using an `A` record
- after the server has been setup (usually under a minute), run

```bash
# replace `SERVERDOMAIN` below
disco init root@SERVERDOMAIN
```


### Note on servers with low memory

If you selected a server with 4 Gb of RAM or less, it may be a good idea to extend your server memory by following [these instructions](/misc/extending-your-server-memory).