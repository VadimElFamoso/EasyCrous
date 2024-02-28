const { SlashCommandBuilder } = require('discord.js');
const { getCrousData } = require('../../data/crousData.js');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('ping')
		.setDescription('Affiche le temps de réponse de CrousBloungs'),
	async execute(interaction) {
		await interaction.reply(`Le temps de réponse de CrousBloungs est de : ${interaction.createdTimestamp- Date.now()}ms`);
		console.log(getCrousData('http://webservices-v2.crous-mobile.fr:8080/feed/nancy.metz/externe/crous-nancy.metz.json'))
	},
};

