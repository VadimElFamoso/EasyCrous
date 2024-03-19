const { SlashCommandBuilder } = require('discord.js');
const { getMeals } = require('../../data/crousData.js');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('crousmeals')
		.setDescription(`Vous permet d'obtenir le menu d'un restaurant universitaire particulier`)
        .addStringOption(option =>
            option.setName('restaurant_id')
            .setDescription('Id du restaurant dont vous souhaitez avoir le menu')),
            
	async execute(interaction) {

        interaction.reply(await getMeals(interaction.options.getString('restaurant_id')));
        
	},
};