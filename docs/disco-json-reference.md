---
sidebar_position: 5
---

# disco.json reference

Projects deployed with `disco` typically have a `disco.json` file. You can see many examples of this file in the [example Flask app](/deployment-guides/flask-sqlite), [example Node app](/deployment-guides/node), [example Django app](/deployment-guides/django), etc.

*This is a work in progress.*

---

### Example structure

The structure of a `disco.json` file is demonstrated in the example below:

```json
{
  "version": "1.0",
  "services": {
    // simple example service - one web server running on port 8000
    // naming your service "web" will automatically connect the project's domain &
    // web server to this service
    "web": {
      "port": 8000
    },

    // another possible service - a worker that runs in the background
    "worker": {
      "command": "python worker.py"
    },

    "ffmpegWorker": {
      "command": "python ffmpeg_worker.py",
      // services can also specify which `image` they want to use
      // see the `images` key below for more information
      "image": "ffmpeg-worker"
    },

    // additional services can be listed here as well.
  },
  "images": {
    // `images` are optional definitions used by the services above
    // when specifying an `image` value
    "ffmpeg-worker": {
      // path to the Dockerfile for this image
      "dockerfile": "Dockerfile.ffmpeg",
      // directory from where the image will be run
      // specifying "." will set the context to the root of the project
      "context": "."
    }
  }
}
```


### Default `disco.json` file

We recommend that your projects always have a `disco.json` file, but if it doesn't, a default value will be used for it: one web-exposed service running on port `8000`. The default value of the `disco.json` file is thus:

```json
{
    "version": "1.0",
    "services": {
        "web": {
            "port": 8000
        }
    }
}
```
