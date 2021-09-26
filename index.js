const Discord = require('discord.js');
const config = require("./config.json");

const intents = new Discord.Intents();
intents.add(Discord.Intents.FLAGS.GUILDS);
intents.add(Discord.Intents.FLAGS.GUILD_MESSAGES);

const client = new Discord.Client({
    intents: intents,
});

client.on('ready', function (client) {
    console.log("Ready!");
    let invite = client.generateInvite({
        scopes: ['bot']
    });
    console.log("Invite: ", invite);
});

client.on('messageCreate', function (message) {
    if (message.author.bot) {
        return;
    }

    console.log(message.content);

    // If user sends yes, reply with no
    if (message.content.toLowerCase() == 'red') {
        message.channel.send("blue")
            .then((message) => {
                console.log("message sent");
            })
            .catch(err => {
                console.log("Could not send message!")
                console.log(err.message);
            })
    } else if (message.content.toLowerCase() == 'green') {
        message.channel.send("orange")
            .catch(function (err) {
                console.log("Couldn't reply: ", err.message);
            })
    }


    //our own functions here
});

client.login(config.token);