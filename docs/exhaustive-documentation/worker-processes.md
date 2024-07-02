---
sidebar_position: 3
---

# Worker Processes

In your `disco.json` file, you can define many services. The one that has the name `web` will be exposed to the internet by Disco. The other ones will just run.

```json
{
    "version": "1.0",
    "services": {
        "web": {
            "command": "./bin/serve.sh",
            "port": 8080
        },
        "worker": {
            "command": "python worker.py"
        }
    }
}
```

Each service [sees each other in a private network](ports#internal-communication-between-services) that is specific for this project's deployment. 
