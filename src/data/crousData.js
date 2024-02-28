function getCrousData(data_source){
    fetch(data_source)
    .then(res => res.json())
    .then(data => console.log(data.restaurants[3].menus));
}

function getRestaurants(data){
    return getCrousData(data).restaurants;
}

module.exports = { getCrousData, getRestaurants }





