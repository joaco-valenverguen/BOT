const { Command } = require('../../commands')
const Discord = require('discord.js');//Discord.js
module.exports = class SayCommand extends Command {
 constructor() {
  super({
   name: 'say',
   aliases: [], 
   category: 'diversion',
   priority: 9,
   permLvl: 0
  })
 }
 execute(message,args, client) {

	if(args[0] == "embed") { //Si la primera args es embed pasa esto...
        let texto = args.slice(1).join(" ") //Defines texto a partir de la 2da args
        if(!texto) return message.channel.send("No has escrito un mensaje"); //Si no has puesto texto te lo dice
        const embed = new Discord.MessageEmbed() //Defines embed
        .setDescription(texto) //Pones el texto
        .setColor("RANDOM") //Color random
        .setFooter(message.member.displayName, message.author.displayAvatarURL())
        message.channel.send(embed) //Mandas el embed
        message.delete({timeout:0}) //Borras el mensaje del autor
        } else if(args[0] == "normal") { //Si la primera args es normal pasa esto...
        let texto = args.slice(1).join(" ") 
        if(!texto) return message.channel.send("No has escrito un mensaje");
        message.channel.send(texto) //Mandas el mensaje
        message.delete({timeout:0})
        }
 }
}