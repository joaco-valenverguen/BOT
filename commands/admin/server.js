const {
    Command
   } = require('../../commands')
module.exports = class ServerCommand extends Command {
    constructor() {
     super({
      name: 'server',
      aliases: [''],
      category: 'admin',
      priority: 5,
      permLvl: 3
     })
    }
    async execute( message) {
        const {MessageEmbed } = require('discord.js');

        var server = message.guild;
  
        const embed = new MessageEmbed()
        .setThumbnail(server.iconURL())
        .setAuthor(server.name, server.iconURL())
        .addField('ID', server.id, true)
        .addField('Region', server.region, true)
        .addField('Creado el', server.joinedAt.toDateString(), true)
        .addField('Dueño del Servidor', server.owner.user.tag+' ('+server.owner.user.id +')', true)
        .addField('Miembros', server.memberCount, true)
        .addField('Roles', server.roles.size, true)
        .setColor(0x66b3ff)
            
        message.channel.send(embed);

    }      
}