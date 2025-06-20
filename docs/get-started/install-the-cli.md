---
sidebar_position: 1
---

# Install the CLI

### Easy install

The CLI is meant to be installed on your own, local development machine. You don't need to install it on any of your servers.

The easiest way to set up the CLI under Linux and macOS is to run:

```bash
curl https://cli-assets.letsdisco.dev/install.sh | sh
```

The installation script above requires sudo to create symbolic links under `/usr/local`. 

---

### Tarballs

You can also download one of these tarballs and extract it yourself:

| Operating system | Tarball | Notes |
| ---------------- | --- | ----- |
| Linux            | [disco-linux-arm.tar.gz](https://cli-assets.letsdisco.dev/channels/stable/disco-linux-arm.tar.gz) | |
| Linux            | [disco-linux-arm64.tar.gz](https://cli-assets.letsdisco.dev/channels/stable/disco-linux-arm64.tar.gz) | |
| Linux            | [disco-linux-x64.tar.gz](https://cli-assets.letsdisco.dev/channels/stable/disco-linux-x64.tar.gz) | |
| macOS            | [disco-darwin-arm64.tar.gz](https://cli-assets.letsdisco.dev/channels/stable/disco-darwin-arm64.tar.gz) | For Apple Silicon (M1, etc.)<br />[See note below](#for-macos-if-you-get-an-error-saying-node-cant-be-opened-because-apple-cannot-check-it-for-malicious-software-run-the-following-command). |
| macOS            | [disco-darwin-x64.tar.gz](https://cli-assets.letsdisco.dev/channels/stable/disco-darwin-x64.tar.gz) | [See note below](#for-macos-if-you-get-an-error-saying-node-cant-be-opened-because-apple-cannot-check-it-for-malicious-software-run-the-following-command). |
| Windows          | [disco-win32-x64.tar.gz](https://cli-assets.letsdisco.dev/channels/stable/disco-win32-x64.tar.gz) | |
| Windows          | [disco-win32-x86.tar.gz](https://cli-assets.letsdisco.dev/channels/stable/disco-win32-x86.tar.gz) | |

#### After downloading

- Extract the tarball into a directory of your choice i.e. `tar -zxf (.tar.gz archive)`
- Then, create a symbolic link to the `bin/disco` script in a directory that is in your `PATH`. For example:

```bash
sudo ln -s ~/myapps/disco/bin/disco /usr/local/bin/disco
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
