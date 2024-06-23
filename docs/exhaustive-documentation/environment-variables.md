---
sidebar_position: 1
---

# Environment Variables

To set environment variables for you project, you can use the CLI commands:

```bash
disco env:set --project my-project VAR_NAME=value
```

You can set many of them at once:
```bash
disco env:set --project my-project VAR_NAME=value OTHER_VAR="other value"
```

To retrieve a specific value:
```bash
disco env:get --project my-project VAR_NAME
```

Or to retrieve all key/values:
```bash
disco env:list --project my-project
```

## Using Environment Variables in your App

Your code can use environment variables like anywhere else.

E.g. in Bash
```bash
echo "Hello $VAR_NAME"
```
in Python
```python
import os
print(f"Hello {os.getenv('VAR_NAME')")
```
or in JavaScript with NodeJS
```javascript
console.log(`Hello ${process.env.VAR_NAME}`)
```

## Using Environment Variables When Building Images

When building Docker images, we need to be careful to avoid including the variables in the images. Disco uses the recommended way to expose environment variables without baking them into the images.

See Docker documentation about [Build Secrets](https://docs.docker.com/build/building/secrets/) for more info.

### Dot Env (.env)

You can either access all of the variables as a `.env` file, where each line is `VAR_NAME=value`

```Dockerfile
RUN --mount=type=secret,id=.env your-command
```

Docker will make the file available as `/run/secrets/.env` for that one command. If the base image you're using supports it, you could use the `.env` file as follows
```Dockerfile
RUN --mount=type=secret,id=.env env $(cat /run/secrets/.env | xargs) your-command
```

That way, `your-command` will have the environment loaded just before it runs.

Make sure to not set the environment variable with `export`, because it would set it in the environment of the image and it would mean your secrets have leaked.

### Individual Variable

If you only want access to a single variable, you can do this

```Dockerfile
RUN --mount=type=secret,id=VAR_NAME your-command
```

and `/run/secrets/VAR_NAME` will contain the value of the variable.

You could add many variables using this method:
```Dockerfile
RUN --mount=type=secret,id=VAR_NAME --mount=type=secret,id=OTHER_VAR your-command
```

### Specifying the File Path and File Name to Use

If you need to use a specific path for the files that Docker makes available, instead of e.g. `/run/secrets/.env`, you can specify it with `target`.

The [Docker documentation](https://docs.docker.com/build/building/secrets/#target) contains this example
```Dockerfile
RUN --mount=type=secret,id=aws,target=/root/.aws/credentials \
    aws s3 cp ...
```
We can adapt it to Disco's environment variables like
```bash
disco env:set --projecct my-project AWS_CREDENTIALS='...'
```
```Dockerfile
RUN --mount=type=secret,id=AWS_CREDENTIALS,target=/root/.aws/credentials \
    aws s3 cp ...
```
