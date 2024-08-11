# Crons

You can specify crons in your `disco.json` file:
```json
{
    "version": "1.0",
    "services": {
        "web": {
            "port": 8080,
            "command": "./bin/serve.sh"
        },
        "mycron": {
            "type": "cron",
            "schedule": "0 * * * *",
            "command": "./bin/crons/hour.sh"
        }
    }
}
```

## Useful Examples

Here are a few useful examples of `crontab` notation to get you started:
```json
{
    "version": "1.0",
    "services": {
        "web": {
            "port": 8080,
            "command": "./bin/serve.sh"
        },
        "minutecron": {
            "type": "cron",
            "schedule": "* * * * *",
            "command": "./bin/cron/oneminute.sh"
        },
        "hourcron": {
            "type": "cron",
            "schedule": "0 * * * *",
            "command": "./bin/cron/onehour.sh"
        },
        "daycron": {
            "type": "cron",
            "schedule": "0 0 * * *",
            "command": "./bin/cron/oneday.sh"
        }
    }
}
```
