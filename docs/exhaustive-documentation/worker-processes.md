---
sidebar_position: 2
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

Each service sees the other ones in a private network that is specific for this project's deployment. For example, `worker` could make this call

```python
import requests

response = requests.get("http://web:8080/")
```

Note the `http` scheme (not `https` and the port `:8080` in `"http://web:8080/"`. The network used is encrypted (no need for HTTPS), and since it's not going through the reverse proxy, the port that is exposed on the container directly is used.

All ports are exposed. For example, we could have an internal API running like this:
```json
{
    "version": "1.0",
    "services": {
        "web": {
            "command": "./bin/serve.sh",
            "port": 8080
        },
        "internalapi": {
            "command": "./bin/serve-internal-api.sh"
        }
    }
}
```

And `web` could query `internalapi` on the ports it exposes, without having to specify it in `disco.json`, because they're not exposed to the internet.

Or, `web` could also expose other ports to be made available internally without exposing them to the internet. Only the port of `web` that is defined in `port` is exposed to the internet (defaulting to `8000` when none is specified).
