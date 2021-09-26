/**
 * 
 */

const Discord = require('discord.js');
const config = require("./config.json");

const myIntents = new Discord.Intents();
myIntents.add(Discord.Intents.FLAGS.GUILDS);
myIntents.add(Discord.Intents.FLAGS.GUILD_MESSAGES);

const client = new Discord.Client({
    intents: myIntents,
});

client.on('ready', function (myClient) {

    //generate link
    let inviteLink = myClient.generateInvite({
        scopes: ['bot']
    });
    //print the link for the user to invite the bot to their server
    console.log("Invite the bot to your server\n\t{{{ " + inviteLink + " }}}");
});


client.on('messageCreate', function (userInput) {

    //if the input is from the bot itself, do nothing
    if (userInput.author.bot) {
        return;
    }

    //Lee's work
    //international greeting
    const greetings = ["hello", "hi", "welcome", "hey", "wassup"];
    const greetings2 = ["Bonjour", "Hola", "Xin chao", "Konnichiwa", "Aloha"];

    //respond international greeting
    if (greetings.some(word => userInput.content.includes(word))) {
        const greeting = greetings2[Math.floor(Math.random() *greetings2.length)] 
        userInput.reply(greeting);
        return;
    }

    //The Twelve Days of Christmas
    switch(userInput.content)
    {
        case '1':
            userInput.reply("partridge in a pear tree");
            break;
        case '2':
            userInput.reply("turtle doves");
            break;
        case '3':
            userInput.reply("French hens");
            break;
        case '4':
            userInput.reply("calling birds");
            break;
        case '5':
            userInput.reply("golden rings");
            break;
        case '6':
            userInput.reply("geese a-laying");
            break;
        case '7':
            userInput.reply("swans a-swimming");
            break;
        case '8':
            userInput.reply("maids a-milking");
            break;
        case '9':
            userInput.reply("ladies dancing");
            break;
        case '10':
            userInput.reply("lords a-leaping");
            break;
        case '11':
            userInput.reply("pipers piping");
            break;
        case '12':
            userInput.reply("drummers drumming");
            break;
        default:
            break;
    }

    // If user sends yes, reply with no
    if (userInput.content.toLowerCase() == 'red') {
        userInput.channel.send("blue")
            .then((msg) => {
                console.log("message sent");
            })
            .catch(error => {
                console.log("Error: " + error.message);
            })
        return;
    } else if (userInput.content.toLowerCase() == 'green') {
        userInput.channel.send("orange")
            .catch(function (error) {
                console.log("Couldn't reply: ", error.message);
            })
        return;
    }

    //respond to the bot name
    if (userInput.content.includes('@Second')) {
        userInput.reply("Heeeeey, thank you for calling my name, " + userInput.author + " !");
        return;
    }

    //emoji detector
    // if(userInput.content[0] == ":a:"){
    //     userInput.reply("Nice emoji! " + userInput.content);
    //     return;
    // }

    //random responses
    if ('a' <= userInput.content[0].toLowerCase() && userInput.content[0].toLowerCase() < 'm') {
        userInput.reply(userInput.content + " is delicious.");
    } else if ('m' <= userInput.content[0].toLowerCase() && userInput.content[0].toLowerCase() <= 'z') {
        userInput.reply("I also love " + userInput.content);
    } else {
        userInput.reply("Let me unencrypt " + userInput.content + "... ");
    }
    return;
});

client.login(config.token);