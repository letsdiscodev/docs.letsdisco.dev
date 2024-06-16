---
sidebar_position: 2
---

# Set up your Server

- You will need a server (VPS, or a Raspberry Pi) to deploy your projects to. It's best to use a dedicated machine for disco.
- You will also need a dedicated domain name for the server itself (in addition to any domains for the projects you will be deploying).
  - We recommend using a subdomain, for example `server.yourdomain.com`


### Hetzner

- sign up for a new [Hetzner](https://www.hetzner.com/) account
- once signed up, go to the [Hetzner Cloud Console](https://console.hetzner.cloud/)
- create a new project if necessary
- click the <b>Add Server</b> button in the upper right corner
- on the "Create a server" page:
  - choose a location near you and/or your users
  - for the operating system, choose <b>Ubuntu</b> and the latest version (24.04 as of this writing)
  - for the type of machine, choose <b>x86 (Intel/AMD)</b>
  - you should be able to pick a machine with as low as 2 Gb of memory (if you pick a machine with 4 Gb or less, you might want to [follow these instructions](/misc/extending-your-server-memory) to extend your server memory)
  - under <b>SSH Keys</b>, select one of your ssh keys. if you haven't configured your ssh keys, click the "Security" tab on the left, then add a key ([see this tutorial on Hetzner](https://community.hetzner.com/tutorials/add-ssh-key-to-your-hetzner-cloud))
- set up a dedicated domain or subdomain for the server itself if you haven't done so yet, as in `disco.yourdomain.com` -- point that domain or subdomain to the server's IP address using an `A` record
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
  - under "CPU Options", you can pick <b>Regular</b> and a server size with as low as 2 Gb of memory (if you pick a machine with 4 Gb or less, you might want to [follow these instructions](/misc/extending-your-server-memory) to extend your server memory)
  - under "Choose Authentication Method" make sure to pick <b>SSH Key</b> and select one of your ssh keys (see this page on [how to add an ssh key to Digital Ocean](https://docs.digitalocean.com/products/droplets/how-to/add-ssh-keys/))
- set up a dedicated domain or subdomain for the server itself if you haven't done so yet, as in `disco.yourdomain.com` -- point that domain or subdomain to the server's IP address using an `A` record
- after the server has been setup (usually under a minute), run

```bash
# replace `SERVERDOMAIN` below
disco init root@SERVERDOMAIN
```

### Raspberry Pi

- we're assuming that your Raspberry Pi has direct, public access to the Internet with a fixed IP address (i.e. it's not behind a NAT or firewall). If you're running your Raspberry Pi from home or behind a firewall, please see the "[Host from Home with a Pi](/get-started/host-from-home-with-a-pi)" guide.
- using Raspberry Pi Imager, flash Ubuntu Server 24.04 LTS onto your SD card
  - configure the network settings, hostname, and ssh key during setup
- set up a dedicated domain or subdomain for the server itself if you haven't done so yet, as in `disco.yourdomain.com` -- point that domain or subdomain to the server's IP address using an `A` record
- once you've confirmed your Raspberry Pi is up and running, run

```bash
# replace `SERVERDOMAIN` below
disco init pi@SERVERDOMAIN
```
