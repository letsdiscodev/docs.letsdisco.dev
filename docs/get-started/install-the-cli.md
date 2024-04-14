---
sidebar_position: 1
---

# Install the CLI

## Install from a tarball

Use the table below to find the file for your operating system.

| Operating system | URL | Notes |
| ---------------- | --- | ----- |
| Linux            | [disco-linux-arm.tar.gz](https://disco-cli-assets.s3.amazonaws.com/channels/stable/disco-linux-arm.tar.gz) | |
| Linux            | [disco-linux-arm64.tar.gz](https://disco-cli-assets.s3.amazonaws.com/channels/stable/disco-linux-arm64.tar.gz) | |
| Linux            | [disco-linux-x64.tar.gz](https://disco-cli-assets.s3.amazonaws.com/channels/stable/disco-linux-x64.tar.gz) | |
| macOS            | [disco-darwin-arm64.tar.gz](https://disco-cli-assets.s3.amazonaws.com/channels/stable/disco-darwin-arm64.tar.gz) | For Apple Silicon (M1, etc.) See note below. |
| macOS            | [disco-darwin-x64.tar.gz](https://disco-cli-assets.s3.amazonaws.com/channels/stable/disco-darwin-x64.tar.gz) | See note below. |
| Windows          | [disco-win32-x64.tar.gz](https://disco-cli-assets.s3.amazonaws.com/channels/stable/disco-win32-x64.tar.gz) | |
| Windows          | [disco-win32-x86.tar.gz](https://disco-cli-assets.s3.amazonaws.com/channels/stable/disco-win32-x86.tar.gz) | |

##### Steps after downloading

- Extract the tarball into a directory of your choice i.e. `tar -zxf (.tar.gz archive)`
- Then, add the `bin` directory inside the extracted directory to your `PATH`. For example, if you extracted the tarball to `/usr/local/disco`:

```bash
export PATH=$PATH:/usr/local/disco/bin
```

Test the installation by running:

```bash
disco --version
```

##### For macOS, if you get an error saying "node can’t be opened because Apple cannot check it for malicious software", run the following command:

```bash
# cd into the directory of the extracted tarball
xattr -d com.apple.quarantine bin/node
```
