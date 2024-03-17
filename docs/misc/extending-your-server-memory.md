---
sidebar_position: 1
---

# Extending your Server Memory

Digital Ocean droplets, especially the smaller $6/month ones, may run out of memory as their total amount of memory is pretty limited.

To extend your server memory, you can add a swap file to your droplet. This will allow your droplet to use some of its disk space as memory when it runs out of RAM.

`ssh` into your machine and run the following to activate the swap:

```bash
fallocate -l 2G /swapfile
chmod 600 /swapfile
mkswap /swapfile
swapon /swapfile
echo "/swapfile   none    swap    sw    0   0" >> /etc/fstab
```
