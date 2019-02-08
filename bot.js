const Discord = require("discord.js");
const client = new Discord.Client();


client.on('message', message => {
    if (message.content.startsWith("رابط")) {

  message.channel.createInvite({
        thing: true,
        maxUses: 2,
        maxAge: 86400
    }).then(invite =>
      message.author.sendMessage(invite.url)
    )
  message.channel.send("**:link:.تم ارسال الرابط برسالة خاصة**")

message.author.send(`**مدة الرابط :ساعة
عدد استخدامات الرابط : 5**`)


    }
});


client.login(process.env.BOT_TOKEN);
