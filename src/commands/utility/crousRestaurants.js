const { EmbedBuilder } = require('@discordjs/builders');
const { SlashCommandBuilder } = require('discord.js');
const { getRestaurants } = require('../../data/crousData.js')

module.exports = {
	data: new SlashCommandBuilder()
		.setName('crousrestaurants')
		.setDescription('Vous affiche les restaurants universitaires disponibles'),
	async execute(interaction) {

        interaction.reply(await getRestaurants())
        
	},
};