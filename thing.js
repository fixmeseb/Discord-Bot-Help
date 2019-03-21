const Discord = require('discord.js')
//var fs = require('fs');
const client = new Discord.Client()

client.on('message', (receivedMessage) => {
    // Prevent bot from responding to its own messages
    if (receivedMessage.author == client.user){
        return
    }
    if (receivedMessage.content.includes("Activate")){
        receivedMessage.channel.send("Hello World")
    }
    if (receivedMessage.content.includes("Ping")){
        receivedMessage.channel.send("Pong")
    }
    if (receivedMessage.content.includes("Pong")){
        receivedMessage.channel.send("Ping")
    }
    if (receivedMessage.content.includes("username")){
        //Message.guild.members.get(bot.user.id).setNickname("some nickname");
        hello = receivedMessage.author.username
        console.log(hello)
        //client.user.setUsername(hello)
        const Guild = receivedMessage.guild
        console.log(Guild.name)
        //Guild.createEmoji()
    }
    if (receivedMessage.content.includes("avatars"))
    {
        const Guild = receivedMessage.guild
        Guild.members.forEach(user => {
            receivedMessage.channel.send(user.user.avatarURL)
        })
        
    }    
    if (receivedMessage.content.includes("React")){
        receivedMessage.react("🅰")
        receivedMessage.react("🅱")
        //var FFFFFF = client.emojis.get(496056900266229790)
        //receivedMessage.react('496056900266229790')
        //const make = client.emojis.get('496056900266229790')
        //console.log(emoji.name)
        //const emoji = client.emojis.get("557687297215299585")
        receivedMessage.react(emoji)
        
        //.then(reaction => console.log(typeof reaction));

        //recievedMessage.react('emoji')
        //receivedMessage.client.emojis.forEach(customEmoji => {
          //  console.log(`Reacting with custom emoji: ${customEmoji.name} (${customEmoji.id})`)
            //receivedMessage.react(customEmoji)
        //})
        //receivedMessage.react(customEmoji)

    }   


client.on('ready', () => {
    console.log("Connected as " + client.user.tag)
    client.user.setActivity("pulsar verrrry closely", {type: "WATCHING"})
})

// Get your bot's secret token from:
// https://discordapp.com/developers/applications/
// Click on your application -> Bot -> Token -> "Click to Reveal Token"
bot_secret_token = "XXXXXXXXXXXXXXXXXx"

client.login(bot_secret_token)
}
,)
