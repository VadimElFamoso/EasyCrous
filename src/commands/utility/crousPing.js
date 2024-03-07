const { SlashCommandBuilder } = require('discord.js');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('ping')
		.setDescription('Affiche le temps de réponse de CrousBloungs'),
	async execute(interaction) {
		await interaction.reply(`Le temps de réponse de CrousBloungs est de : ${interaction.createdTimestamp-Date.now()}ms`);
	},
};

