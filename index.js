const { Client, Intents, MessageEmbed } = require("discord.js");
require("dotenv").config();

const client = new Client({
  intents: [
    Intents.FLAGS.GUILDS,
    Intents.FLAGS.GUILD_MESSAGES,
    Intents.FLAGS.GUILD_PRESENCES,
  ],
});

const prefix = "/";

client.once("ready", () => {
  console.log("Logged...");
  client.user.setPresence({
    activities: [{
      name: "/help",
      type: 'WATCHING'}],
    status: "online",
  });
});

client.on("messageCreate", async (msg) => {
  
  if(!msg.content.startsWith(prefix))
    return
  
  const rawMsg = msg.content.slice(prefix.length);
  const command = rawMsg.includes(' ') 
    ? rawMsg.substr(0, rawMsg.indexOf(" "))
    : rawMsg
  
  if (command === "format") {

    if (rawMsg.includes("-d") && rawMsg.includes("-u")) {
      let args = rawMsg.substr(rawMsg.indexOf(" ") + 1).split("-d");
      const tittle = args[0];
      const [desc, url] = args[1].trim().split("-u");

      if (tittle && url) {
        const embed = new MessageEmbed()
          .setColor("#000000")
          .setTitle(`🌀️ ${tittle}.`)
          .setDescription(desc ?? "")
          .addField("Source:", url, true)
          .setFooter(
            msg.author.username,
            `https://cdn.discordapp.com/avatars/${msg.author.id}/${msg.author.avatar}.png`
          );

        msg.channel.send({ embeds: [embed] });
        msg.delete();
      } else {
        msg.react("😡");
        msg.channel.send("`tittle` nor `url` **musn't be blank.**");
      }
    } else {
      msg.react("😡");
      msg.channel.send("**Please provide a proper format as** `/format text -d description -u url`");
    }
  }

  if(command === 'help') {
    msg.channel.send("🔹️**Command** `/format text -d description -u url`");
    msg.delete()
  }
});

client.login(process.env.TOKEN);
