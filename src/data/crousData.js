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
        }

    } catch (error) {
        console.error(`${process.env.PREFIX} - Erreur lors de la récupération des restaurants : ${error}`);
        throw error;
    }
}

module.exports = { getRestaurants, getRestaurant };
