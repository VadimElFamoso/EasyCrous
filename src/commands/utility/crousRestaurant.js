const { EmbedBuilder } = require('@discordjs/builders');
const { SlashCommandBuilder } = require('discord.js');
const { getRestaurant } = require('../../data/crousData.js')

module.exports = {
	data: new SlashCommandBuilder()
		.setName('crousrestaurant')
		.setDescription(`Vous permet d'obtenir des renseignements sur un restaurant universitaire particulier`)
        .addStringOption(option =>
            option.setName('restaurant_id')
            .setDescription('Id du restaurant dont vous souhaitez avoir les renseignements')),
            
	async execute(interaction) {

        interaction.reply(await getRestaurant(interaction.options.getString('restaurant_id')));
        
        // const embed = new EmbedBuilder()
        // .setColor(14811402)
        // .setTitle('Restaurants universitaires de Lorraine')
        // .setDescription('CrousBloungs vous présente la liste des restaurants universitaires de Lorraine :')
        // .setThumbnail()
		// .addFields(await getRestaurant())
        // .setFooter({ text:'Made with <3 by Vadim2k! - CrousBloungs©', iconURL:'https://cdn.discordapp.com/avatars/1067135462621319218/eaf032c7c7f6668f4a4d5909d2d29e02?size=1024'})
        // await interaction.reply(({embeds: [embed]}));
	},
};