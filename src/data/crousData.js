// crousData.js
async function getRestaurants() {
    try {
        const response = await fetch('http://webservices-v2.crous-mobile.fr:8080/feed/nancy.metz/externe/crous-nancy.metz.json');
        const data = await response.json();
        let univ_restaurants = [];

        for (let i = 0; i < data.restaurants.length; i++) {
            let restaurant_status;
        
            restaurant_status = data.restaurants[i].closing === '0' ? true : false;
            restaurant_status ? univ_restaurants.push(`${data.restaurants[i].title} - Statut : EN LIGNE : ✅ - ID : ${data.restaurants[i].id}`) : univ_restaurants.push(`${data.restaurants[i].title} - Statut : HORS LIGNE : ❌ - ID : ${data.restaurants[i]}`);
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
    try {
        const response = await fetch('http://webservices-v2.crous-mobile.fr:8080/feed/nancy.metz/externe/crous-nancy.metz.json');
        const data = await response.json();

        for (let i = 0; i < data.restaurants.length; i++) {
            if(data.restaurants[i].id === restaurant_id){
                //Un restaurant a été trouvé, retourne la carte du restaurant
                return({
                    name: data.restaurants[i].name,
                    value: `Adresse : ${data.restaurants[i].adresse}`
                },
                {
                    id: data.restaurants[i].id,
                    photo: data.restaurants[i].photo.src ? data.restaurants[i].photo.src : 'https://cdn.discordapp.com/avatars/1067135462621319218/eaf032c7c7f6668f4a4d5909d2d29e02?size=1024',
                    adresse: data.restaurants[i].adresse,
                })
            }
            //Aucun restaurant a été trouvé, retourne une erreur à l'utilisateur.
            else{
                return({
                    name: `${process.env.PREFIX} - Une erreur a été détectée.`,
                    value: `Aucun restaurant ne correspond à l'ID fournie : ${restaurant_id} n'est pas un ID de restaurant universitaire.`
                })
            }
        }

    } catch (error) {
        console.error(`${process.env.PREFIX} - Erreur lors de la récupération des restaurants : ${error}`);
        throw error;
    }
}

function getMeals(restaurant_id){
    try {
        const response = await fetch('http://webservices-v2.crous-mobile.fr:8080/feed/nancy.metz/externe/crous-nancy.metz.json');
        const data = await response.json();

    } 
    catch (error) {
        console.error(`${process.env.PREFIX} - Erreur lors de la récupération du menu du restaurant ${data.restaurant[]}}`);
        throw error;

    }
}

module.exports = { getRestaurants, getRestaurant };
