const { EmbedBuilder } = require("discord.js");

//Fonction qui récupère l'entiéreté des restaurants universitaires
async function getRestaurants() {
    try {
        const response = await fetch('http://webservices-v2.crous-mobile.fr:8080/feed/nancy.metz/externe/crous-nancy.metz.json');
        const data = await response.json();
        let univ_restaurants = [];

        for (let i = 0; i < data.restaurants.length; i++) {
            let restaurant_status;
        
            restaurant_status = data.restaurants[i].closing === '0' ? true : false;
            restaurant_status ? univ_restaurants.push(`${data.restaurants[i].title} - Statut : EN LIGNE : ✅ - ID : ${data.restaurants[i].id}`) : univ_restaurants.push(`${data.restaurants[i].title} - Statut : HORS LIGNE : ❌ `);
        }

        let message = univ_restaurants.join('\n');

        return message;
    } 
    catch (error) {
        console.error(`${process.env.PREFIX} - Erreur lors de la récupération des restaurants : ${error}`);
        throw error;
    }
}

async function getRestaurant(restaurant_id){
    const response = await fetch('http://webservices-v2.crous-mobile.fr:8080/feed/nancy.metz/externe/crous-nancy.metz.json');
    const data = await response.json();

    //Scan de l'entiéreté des restaurants universitaires
    for(let i = 0; i < data.restaurants.length; i++){
        //Un restaurant comportant l'ID fourni en args a été trouvé :
        if(restaurant_id == data.restaurants[i].id){
            return data.restaurants[i].title;
        }
    }

    //Aucun restaurant comportant l'ID founi en args n'a été trouvé :
    return `Aucun restaurant avec l'ID ${restaurant_id} n'a été trouvé.`
}

async function getMeals(restaurant_id){
    const response = await fetch('http://webservices-v2.crous-mobile.fr:8080/feed/nancy.metz/externe/crous-nancy.metz.json');
    const data = await response.json();

    for(let i = 0; i < data.restaurants.length; i++){
        //Un restaurant comportant l'ID fourni en args a été trouvé :
        if(restaurant_id == data.restaurants[i].id){
            let meals;
            const embed = new EmbedBuilder()
                .setColor(14811402)
                .setTitle(`Menu de ${data.restaurants[i].title}`)
                .setDescription(`Bon appétit !`) //Mettre la date du jour
                
                //On construit les menus dans une embed :
                data.restaurants[i].menus[0].meal[0].foodcategory[0].forEach(element => {
                    
                });
                    
                
        }
    }
}

module.exports = { getRestaurants, getRestaurant };
