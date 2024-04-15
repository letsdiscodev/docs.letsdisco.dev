---
sidebar_position: 1
---

# Extending your Server Memory

Server with 4 Gb of RAM or less may run out of memory as their total amount of memory is pretty limited.

To extend your server memory, you can add a swap file to your server. This will allow it to use some of its disk space as memory when it runs out of RAM.

`ssh` into your machine and run the following to activate the swap:

```bash
fallocate -l 2G /swapfile
chmod 600 /swapfile
mkswap /swapfile
swapon /swapfile
echo "/swapfile   none    swap    sw    0   0" >> /etc/fstab
```
