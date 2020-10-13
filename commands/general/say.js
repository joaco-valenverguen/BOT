const { Command } = require('../../commands')
module.exports = class SayCommand extends Command {
 constructor() {
  super({
   name: 'say',
   aliases: [],
   category: 'general',
   priority: 9,
   permLvl: 0
  })
 }
 execute(message,args) {

	let texto = args.join(" ");
	if (!texto) message.channel.send('Debe escribir un mensaje.');

	message.channel.send(texto);
 }
}