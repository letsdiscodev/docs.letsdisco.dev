# Images

Each service uses a Docker image.

## Specifying a Dockerfile

You can define many images in `disco.json` and refer to them in your services.

```json
{
    "version": "1.0",
    "services": {
        "web": {
            "port": 8080,
            "command": "./bin/serve.sh",
            "image": "webimage"
        }
    },
    "images": {
        "webimage": {
            "dockerfile": "Dockerfile",
            "context": "."
        }
    }
}
```

## Default Image

You can avoid talking about images in your `disco.json` file by relying on the default of using the `Dockerfile` and build context at the root of the repository.

```json
{
    "version": "1.0",
    "services": {
        "web": {
            "port": 8080,
            "command": "./bin/serve.sh"
        }
    }
}
```

This `disco.json` above uses the defaults. More on this below.

When you don't specify the image to use for a service, Disco will default to the image named `default`.

Those two `disco.json` are equivalent, defining `"image"` or not in the definition of `"web"`:

```json
{
    "version": "1.0",
    "services": {
        "web": {
            "port": 8080,
            "command": "./bin/serve.sh"
        }
    },
    "images": {
        "default": {
            "dockerfile": "Dockerfile",
            "context": "."
        }
    }
}
```
and
```json
{
    "version": "1.0",
    "services": {
        "web": {
            "port": 8080,
            "command": "./bin/serve.sh",
            "image": "default"
        }
    },
    "images": {
        "default": {
            "dockerfile": "Dockerfile",
            "context": "."
        }
    }
}
```

Also, when not defining the `default` image, Disco will assume the default value shown above. That is, the `Dockerfile` at the root of the repository, the build context as well. Meaning that this third `disco.json` is also equivalent:
```json
{
    "version": "1.0",
    "services": {
        "web": {
            "port": 8080,
            "command": "./bin/serve.sh"
        }
    }
}
```

In other words, if the `Dockerfile` you want to use is at the root of the repository, and the build context is also the root of the repository, you can just avoid thinking about images in your `disco.json`.

## Many images, many services

Each service can use a different Docker image.

```json
{
    "version": "1.0",
    "services": {
        "web": {
            "port": 8080,
            "command": "./bin/serve.sh",
            "image": "webimage"
        },
        "worker": {
            "command": "./bin/worker.sh",
            "image": "workerimage"
        }
    },
    "images": {
        "webimage": {
            "dockerfile": "Dockerfile",
            "context": "."
        },
        "workerimage": {
            "dockerfile": "Dockerfile.worker",
            "context": "."
        }
    }
}
```

## Using Dockerfiles in Sub-Directories

You can pass the path to your Dockerfile, and also the path for the [local context](https://docs.docker.com/build/building/context/#local-context).

For example:
```json
{
    "version": "1.0",
    "services": {
        "web": {
            "port": 8080,
            "command": "./bin/serve.sh",
            "image": "webimage"
        }
    },
    "images": {
        "webimage": {
            "dockerfile": "webapp/Dockerfile",
            "context": "webapp/."
        }
    }
}
```
or another exmaple, if the Dockerfile is in a sub-directory, but should be built using the root as the context:
```json
{
    "version": "1.0",
    "services": {
        "web": {
            "port": 8080,
            "command": "./bin/serve.sh",
            "image": "webimage"
        }
    },
    "images": {
        "webimage": {
            "dockerfile": "webapp/Dockerfile",
            "context": "."
        }
    }
}
```

## Using Publicly Downloadable Images

If the name of the image to use is not defined in `images`, Disco will see if it can download it.

```json
{
    "version": "1.0",
    "services": {
        "worker": {
            "command": "python -c $'import time\nwhile True:\n time.sleep(1)'",
            "image": "python:3.12.3"
        }
    }
}
```

In this case, it would use the [official Python image](https://hub.docker.com/_/python) from Docker Hub.

It's the equivalent of running
```bash
docker pull python:3.12.3
docker run python:3.12.3 python -c $'import time\nwhile True:\n time.sleep(1)'
```
