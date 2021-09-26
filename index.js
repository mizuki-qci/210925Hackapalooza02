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
            return;
        case '2':
            userInput.reply("turtle doves");
            return;
        case '3':
            userInput.reply("French hens");
            return;
        case '4':
            userInput.reply("calling birds");
            return;
        case '5':
            userInput.reply("golden rings");
            return;
        case '6':
            userInput.reply("geese a-laying");
            return;
        case '7':
            userInput.reply("swans a-swimming");
            return;
        case '8':
            userInput.reply("maids a-milking");
            return;
        case '9':
            userInput.reply("ladies dancing");
            return;
        case '10':
            userInput.reply("lords a-leaping");
            return;
        case '11':
            userInput.reply("pipers piping");
            return;
        case '12':
            userInput.reply("drummers drumming");
            return;
        default:
            break;
    }

    //respond to the bot name
    if (userInput.content.includes("891519385179680799")) {
        userInput.reply("Heeeeey, thank you for calling my name, <@" + userInput.author + "> !");
        return;
    } else if (userInput.content.includes("Second") || userInput.content.includes("second")){
        userInput.reply("Heeeeey, thank you for calling my name, <@" + userInput.author + "> !");
    }

    //emoji detector
    // if((userInput.content.includes("<:") && userInput.content.includes("<a:")) && userInput.content.includes(">")){
    //     userInput.reply("Nice emoji, <@" + userInput.author + "> "+ userInput.content);
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