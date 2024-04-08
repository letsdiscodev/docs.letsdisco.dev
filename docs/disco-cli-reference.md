---
sidebar_position: 5
---

# CLI reference

# Commands
<!-- commands -->
* [`disco env:get [ENVVAR]`](#disco-envget-envvar)
* [`disco help [COMMAND]`](#disco-help-command)
* [`disco init SSHSTRING`](#disco-init-sshstring)
* [`disco logs`](#disco-logs)
* [`disco meta:host DOMAIN`](#disco-metahost-domain)
* [`disco meta:info`](#disco-metainfo)
* [`disco meta:upgrade`](#disco-metaupgrade)
* [`disco projects:add`](#disco-projectsadd)
* [`disco projects:list`](#disco-projectslist)
* [`disco projects:move`](#disco-projectsmove)
* [`disco projects:remove [PROJECT]`](#disco-projectsremove-project)

## `disco env:get [ENVVAR]`

read the environment variables

```
USAGE
  $ disco env:get [ENVVAR] --project <value> [--disco <value>]

ARGUMENTS
  ENVVAR  environment variable to read

FLAGS
  --disco=<value>
  --project=<value>  (required)

DESCRIPTION
  read the environment variables

EXAMPLES
  $ disco env:get --project mysite API_KEY
```

## `disco help [COMMAND]`

Display help for disco.

```
USAGE
  $ disco help [COMMAND...] [-n]

ARGUMENTS
  COMMAND...  Command to show help for.

FLAGS
  -n, --nested-commands  Include all nested commands in the output.

DESCRIPTION
  Display help for disco.
```

## `disco init SSHSTRING`

initializes a new server

```
USAGE
  $ disco init SSHSTRING [--version <value>]

FLAGS
  --version=<value>  [default: latest] version of disco daemon to install

DESCRIPTION
  initializes a new server

EXAMPLES
  $ disco init root@12.34.56.78

  $ disco init root@12.34.56.78 --version 0.4.0.dev2
```

## `disco logs`

fetch logs

```
USAGE
  $ disco logs [--project <value>] [--service <value>] [--disco <value>]

FLAGS
  --disco=<value>
  --project=<value>
  --service=<value>

DESCRIPTION
  fetch logs

EXAMPLES
  $ disco logs
```

## `disco meta:host DOMAIN`

set a host for the server

```
USAGE
  $ disco meta:host DOMAIN [--disco <value>]

FLAGS
  --disco=<value>

DESCRIPTION
  set a host for the server

EXAMPLES
  $ disco meta:host example.com
```

## `disco meta:info`

fetch info about the server

```
USAGE
  $ disco meta:info [--disco <value>]

FLAGS
  --disco=<value>

DESCRIPTION
  fetch info about the server

EXAMPLES
  $ disco meta:info
```

## `disco meta:upgrade`

upgrade server

```
USAGE
  $ disco meta:upgrade [--image <value>] [--dontPull] [--disco <value>]

FLAGS
  --disco=<value>
  --dontPull       don't pull the image before upgrading
  --image=<value>  the image to use. Defaults to letsdiscodev/daemon:latest

DESCRIPTION
  upgrade server

EXAMPLES
  $ disco meta:upgrade
```

## `disco projects:add`

add a project

```
USAGE
  $ disco projects:add --name <value> [--domain <value>] [--github-repo <value>] [--disco <value>] [--deploy]

FLAGS
  --deploy               deploy the project after adding it
  --disco=<value>        server to use
  --domain=<value>       domain name where the app will be served, e.g. www.example.com
  --github-repo=<value>  URL used to clone the repo, e.g. git@github.com:example/example.git
  --name=<value>         (required) project name

DESCRIPTION
  add a project

EXAMPLES
  $ disco projects:add
```

## `disco projects:list`

list projects

```
USAGE
  $ disco projects:list [--disco <value>]

FLAGS
  --disco=<value>

DESCRIPTION
  list projects

EXAMPLES
  $ disco projects:list
```

## `disco projects:move`

move a project from one server to another

```
USAGE
  $ disco projects:move --project <value> --from-disco <value> --to-disco <value>

FLAGS
  --from-disco=<value>  (required) source disco server
  --project=<value>     (required) project name
  --to-disco=<value>    (required) destination disco server

DESCRIPTION
  move a project from one server to another

EXAMPLES
  $ disco projects:move --project mysite --from-disco 10.1.1.1 --to-disco 10.2.2.2
```

## `disco projects:remove [PROJECT]`

remove a project

```
USAGE
  $ disco projects:remove [PROJECT] [--disco <value>]

ARGUMENTS
  PROJECT  project to remove

FLAGS
  --disco=<value>

DESCRIPTION
  remove a project

EXAMPLES
  $ disco projects:remove project-name
```
<!-- commandsstop -->
