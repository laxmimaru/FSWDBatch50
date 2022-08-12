
class restaurantManager {
    restaurantList =[
        {
            id:1,
            restName:'KFC',
            address:"anand vihar",
            city:"delhi"
        },
        {
            id:2,
            restName:'Dominos',
            address:"savita vihar",
            city:"delhi"
        },
        {
            id:3,
            restName:'Burger king',
            address:"civil lines vihar",
            city:"pune"
        },
        {
            id:4,
            restName:'Subway',
            address:"cantonment",
            city:"mumbai"
        }
    ]

    printAllRestaurantNames=()=>{
        return this.restaurantList.map(restaurant => restaurant)
    }

    filterRestaurantsByCity=(cityName)=>{
        return this.restaurantList.filter( restaurant => restaurant.city == cityName )
    }

}


const restaurantObj = new restaurantManager();
//console.log(restaurantObj.printAllRestaurantNames());

console.log(restaurantObj.filterRestaurantsByCity('delhi'));



//number of restirants in each city
