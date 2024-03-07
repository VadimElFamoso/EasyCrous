const { EmbedBuilder } = require('@discordjs/builders');
const { SlashCommandBuilder } = require('discord.js');
const { getRestaurants } = require('../../data/crousData.js')

module.exports = {
	data: new SlashCommandBuilder()
		.setName('crousrestaurants')
		.setDescription('Vous affiche les restaurants universitaires disponibles'),
	async execute(interaction) {

        interaction.reply(await getRestaurants())
        
        // const embed = new EmbedBuilder()
        // .setColor(14811402)
        // .setTitle('Restaurants universitaires de Lorraine')
        // .setDescription('CrousBloungs vous présente la liste des restaurants universitaires de Lorraine :')
        // .setThumbnail('https://cdn.discordapp.com/avatars/1067135462621319218/eaf032c7c7f6668f4a4d5909d2d29e02?size=1024')
		// .addFields(await getRestaurants())
        // .setFooter({ text:'Made with <3 by Vadim2k! - CrousBloungs©', iconURL:'https://cdn.discordapp.com/avatars/1067135462621319218/eaf032c7c7f6668f4a4d5909d2d29e02?size=1024'})
        // await interaction.reply(({embeds: [embed]}));
	},
};