const Discord = require("discord.js");
const intents = new Discord.Intents(32767); // '32767' corresponds to ALL possible permits
const client = new Discord.Client({ intents });
require("dotenv").config();

const prefix = "!";

client.once("ready", () => {
  console.log("Logged...");
});

client.on("messageCreate", async (msg) => {
  const rawMsg = msg.content.slice(prefix.length);
  const command = rawMsg.substr(0, rawMsg.indexOf(" "));

  if (command === "format") {
    if (rawMsg.includes("-link")) {
      const args = rawMsg.substr(rawMsg.indexOf(" ") + 1).split("-link");
      if (args[0].length > 0 && args[1].length > 0) {
        msg.channel.send(`\`${args[0]}\` \n <${args[1].trim()}>`);
        msg.delete();
      }
    } else {
      msg.react("😡");
      msg.channel.send("Please provide a proper format as `!format text -link link`");
    }
  }
});

client.login(process.env.TOKEN);
