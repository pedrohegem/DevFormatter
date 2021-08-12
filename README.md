# 🌀️ DevFormatter
A discord bot to format your discord server messages.
## 🔹️ Installation
Use a <strong>packet manager</strong> of your preference to install all dependencies. I personally recommend `npm` or `yarn`
```bash
npm/yarn install
```
Since <strong>dotenv</strong> is used to keep your bot token secure, create an `.env` file in your root directory and add your token as follows:

``` TOKEN= youractualtokenhere```
## 🔹️ Usage
Running the bot:
```bash
npm/yarn start
```
Development:
```bash
npm/yarn run server
```
## 🔹️ Commands
### 🔸️ Format
Creates and sends an embed message based on the args: `title`, `description` and `url`
```
.format tittle -d description -u url
```
Argument `description` is optional, in case you don't want to provide a description, leave it blank but don't forget to <strong>KEEP</strong> the `-d`
### 🔸️ Help
Displays how to set proper inputs to .format command
