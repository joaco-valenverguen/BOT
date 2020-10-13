const { Command } = require('../../commands')
const Discord = require('discord.js');

module.exports = class AvatarCommand extends Command {
 constructor() {
  super({
   name: 'avatar',
   aliases: [],
   category: 'general',
   priority: 9,
   permLvl: 0
  })
 }
 execute(msg) {

    let embed = new Discord.MessageEmbed()
    .setImage(`${msg.author.displayAvatarURL()}`)
    .setColor(0x66b3ff)
    .setFooter(`Avatar de ${msg.author.username}`)
 
  msg.channel.send(embed)
 }
}