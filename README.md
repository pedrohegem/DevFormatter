# đī¸ DevFormatter
A discord bot based off discord.js created to format your discord server messages.

## đšī¸ Installation
This bot is written to run on top of node.js. Please see https://nodejs.org/en/download/ </br></br>
Use a <strong>packet manager</strong> of your preference to install all dependencies. I personally recommend `npm` or `yarn`
```bash
npm/yarn install
```
Since <strong>dotenv</strong> is used to keep your bot token secure, create an `.env` file in your root directory and add your token as follows:

``` TOKEN= youractualtokenhere```
## đšī¸ Getting started
This is also a <i>self-hosted</i> bot â meaning you will need to host and maintain your own instance.</br>
Running the bot:
```bash
npm/yarn start
```
Development:
```bash
npm/yarn run server
```
## đšī¸ Commands
### đ¸ī¸ Format
Creates and sends an embed message based on the args: `title`, `description` and `url`
```
.format tittle -d description -u url
```
Argument `description` is optional, in case you don't want to provide a description, leave it blank but don't forget to <strong>KEEP</strong> the `-d`
### đ¸ī¸ Help
Displays how to set proper inputs to .format command
## đšī¸ Example
![Example Image](https://github.com/pedrohegem/DevFormatter/blob/main/example.png)
