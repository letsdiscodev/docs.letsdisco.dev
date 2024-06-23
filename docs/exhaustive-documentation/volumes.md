---
sidebar_position: 5
---

# Volumes

In some cases, you may need to store data that outlives a container lifetime. You can achieve this using volumes.

```json
{
    "version": "1.0",
    "services": {
        "web": {
            "port": 8080,
            "command": "./bin/serve.sh",
            "volumes": [
                {
                    "name": "sqlite-data",
                    "destinationPath": "/sqlitedata"
                }
            ]
        }
    }
}
```

You can also have the same volume be mounted in many services:
```json
{
    "version": "1.0",
    "services": {
        "web": {
            "port": 8080,
            "command": "./bin/serve.sh",
            "volumes": [
                {
                    "name": "sqlite-data",
                    "destinationPath": "/sqlitedata"
                }
            ]
        }, {
        "worker": {
            "command": "./bin/work.sh",
            "volumes": [
                {
                    "name": "sqlite-data",
                    "destinationPath": "/sqlitedata"
                }
            ]
        }
    }
}
```

In the example above, both services would read and write from the same volume.

Volumes are scoped per project. If you use the same volume name for 2 different projects, they will not conflict.

## Scaling Considerations

When running Disco with multiple servers (nodes in a swarm), usually, services will be spread on all servers automatically to spread the load. However, when using volumes, Disco will force the services to run on the main node and the volumes will be created on the hard drive of the main node. In other words, services that use volumes will not scale horiztonally.
