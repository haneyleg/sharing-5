const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready', () => {
    console.log(`Logged in as ${client.user.tag}!`);
    console.log(`in ${client.guilds.size} servers `)
    console.log(`[Codes] ${client.users.size}`)
    client.user.setStatus("idle")
});




 client.on("guildMemberRemove", member => {
  member.createDM().then(function (channel) {
  return channel.send(` 
**
:kissing::heart::eyes: حيااكْ الله  فى سيرفرنا 

نحن نرحب بك في سيرفرنا 
تفضل وسمعنا صوتك الجميل 
يا عسل

joined C A S A N O V A
C A S A N O V A 
        [https://discord.gg/Kx6w6pa]                            
الدعووة خاصة لك ي قلبي ... [ ${member}  ]
**`)
}).catch(console.error)

})
 
client.on("guildMemberAdd", member => {
  member.createDM().then(function (channel) {
  return channel.send(` 
**
:kissing::heart::eyes: حيااكْ الله  فى سيرفرنا 

نحن نرحب بك في سيرفرنا 
تفضل وسمعنا صوتك الجميل 
يا عسل

joined C A S A N O V A
C A S A N O V A
        [https://discord.gg/Kx6w6pa]                            
الدعووة خاصة لك ي قلبي ... [ ${member}  ]
**`) 
}).catch(console.error)
})

client.login(process.env.BOT_TOKEN);
