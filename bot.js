const Discord = require('discord.js');
const client = new Discord.Client();
const prefix = '.'

client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
  console.log('')
  console.log('')
  console.log('╔[═════════════════════════════════════════════════════════════════]╗')
  console.log(`[Start] ${new Date()}`);
  console.log('╚[═════════════════════════════════════════════════════════════════]╝')
  console.log('')
  console.log('╔[════════════════════════════════════]╗');
  console.log(`Logged in as * [ " ${client.user.username} " ]`);
  console.log('')
  console.log('Informations :')
  console.log('')
  console.log(`servers! [ " ${client.guilds.size} " ]`);
  console.log(`Users! [ " ${client.users.size} " ]`);
  console.log(`channels! [ " ${client.channels.size} " ]`);
  console.log('╚[════════════════════════════════════]╝')
  console.log('')
  console.log('╔[════════════]╗')
  console.log(' Bot Is Online')
  console.log('╚[════════════]╝')
  console.log('')
  console.log('')
});

 client.on("guildMemberRemove", member => {
  member.createDM().then(function (channel) {
  return channel.send(` 
**WELCOME TO C A S A N O V A  :hearts:️:dove:**
        https://discord.gg/KhP6eH5                            
الدعووة خاصة لك ي قلبي وعيني ... [ ${member}  ]
`)
}).catch(console.error)

})
 
client.on("guildMemberAdd", member => {
  member.createDM().then(function (channel) {
  return channel.send(` 
**WELCOME TO C A S A N O V A  :hearts:️:dove:**
        https://discord.gg/KhP6eH5                           
الدعووة خاصة لك ي قلبي وعيني ... [ ${member}  ]
`) 
}).catch(console.error)
})

 client.on("guildMemberRemove", member => {
  member.createDM().then(function (channel) {
  return channel.send(` 
**WELCOME TO C A S A N O V A  :hearts:️:dove:**
        https://discord.gg/KhP6eH5                            
الدعووة خاصة لك ي قلبي وعيني ... [ ${member}  ]
`)
}).catch(console.error)

})
 
client.on("guildMemberAdd", member => {
  member.createDM().then(function (channel) {
  return channel.send(` 
**WELCOME TO C A S A N O V A  :hearts:️:dove:**
        https://discord.gg/KhP6eH5                           
الدعووة خاصة لك ي قلبي وعيني ... [ ${member}  ]
`) 
}).catch(console.error)
})

client.login(process.env.BOT_TOKEN);
