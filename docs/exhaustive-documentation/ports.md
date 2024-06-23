---
sidebar_position: 6
---

# Ports

## Web

When deploying a web application, the way to have the web traffic served through Disco's reverse proxy is to specify the port in your `disco.json`.

```json
{
    "version": "1.0",
    "services": {
        "web": {
            "port": 8080,
            "command": "./bin/serve.sh",
        }
    }
}
```

That way, requests come in to your server on port 443 (for https) and Disco's reverse proxy will forward the request to your app on port 8080.

Also, note that the name `web` for the service is important. Disco will use that service to expose to the internet. You can't specify `port` on a service not named `web`.

## Internal Communication Between Services

When a `disco.json` file contains many services, they can see each other by their names. All ports are accessible in this internal network.

For example:

In a project that has a `disco.json` file that looks like this:

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
The service `worker` could make this call

```python
import requests

response = requests.get("http://web:8080/")
```

Note the `http` scheme (not `https` and the port `:8080` in `"http://web:8080/"`. The network used is encrypted (no need for HTTPS), and since it's not going through the reverse proxy, the port that is exposed on the container directly is used.

All ports are exposed in this private network. For example, we could have an internal API running like this:
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

`web` could query `internalapi` on the ports it exposes (like `80`, or `8888`, etc.), without having to specify them in `disco.json`, because they're not exposed to the internet. If your program is listening on a port, the other services of the same project can communicate with it. No special trick needed on your side.

`web` could also expose other ports to be made available internally without exposing them to the internet. Only the port of `web` that is defined in `port` is exposed to the internet (defaulting to `8000` when none is specified).

## Publishing Ports Extenally

In the case where you would like to expose a port externally, bypassing the reverse proxy, you can it like so:

```json
{
    "version": "1.0",
    "services": {
        "receiver": {
            "command": "./bin/receiver.sh",
            "publishedPorts": [{
                "publishedAs": 12000,
                "fromContainerPort": 11000,
                "protocol": "udp"
            }]
        }
    }
}
```

In this case, the container's port `11000` will be exposed on the server directly as port `12000`. Also, the protocol defined is `udp`, or `tcp`.

Since it does not go through the reverse proxy, Disco will not provide a TLS certificate for HTTPS.
