const Discord = require("discord.js");
const client = new Discord.Client();
const developers = ['320423357709549568'];
client.on('message', message => {
        if (!developers.includes(message.author.id)) return;
  if (message.content === '712') {
  let channel = client.channels.get('458667741222797332');

  channel.join()
  .then(connection => console.log('Connected'))
  .catch(console.error);
    
  }
          
});






client.login(process.env.BOT_TOKEN);
