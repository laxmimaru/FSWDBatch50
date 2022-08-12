
const ratingData = [
    {restaurant:'KFC',rating:5},
    {restaurant:'Burger King',rating:4},
    {restaurant:'KFC',rating:3},
    {restaurant:'Domino',rating:2},
    {restaurant:'Subway',rating:3},
    {restaurant:'Domino',rating:1},
    {restaurant:'Subway',rating:4},
    {restaurant:'Pizza hut',rating:5}

]

/*expected o/p:- each restaurant rating
KFC - x
Burger King - y
Domino - z
Subway - a
Pizza hut - b

output object look like
restuarntRating =
[
    {
restaurant:
ratingCount : 
ratingTotal :
averageRating:
}
]
*/

let restaurantRatingTotals={};

ratingData.map((curr_rest)=>{

    //console.log('restaurant = ' , curr_rest)
    //console.log('name = ' , curr_rest.restaurant,' rating = ', curr_rest.rating)
    if(restaurantRatingTotals[curr_rest.restaurant]){
        restaurantRatingTotals[curr_rest.restaurant] = restaurantRatingTotals[curr_rest.restaurant]+curr_rest.rating;
    }else{
        restaurantRatingTotals[curr_rest.restaurant] = curr_rest.rating;
    }
}

)

console.log('restaurantRatingTotals = ',restaurantRatingTotals)





let restaurantRatingCounts={};

ratingData.map((curr_rest)=>{

    if(restaurantRatingCounts[curr_rest.restaurant]){
        restaurantRatingCounts[curr_rest.restaurant] = restaurantRatingCounts[curr_rest.restaurant]+1;
    }else{
        restaurantRatingCounts[curr_rest.restaurant] = 1;
    }
}

)

console.log('restaurantRatingCounts = ',restaurantRatingCounts)

let restaurantRatings={}

Object.keys(restaurantRatingTotals).map((restaurant)=>{
    console.log('restaurant = ',restaurant)
    Object.keys(restaurantRatingCounts).map((countrest)=>{
        console.log('name = ' ,countrest,' count = ', restaurantRatingCounts[countrest])
        if(restaurant ==countrest){
            restaurantRatings[countrest] = restaurantRatingTotals[restaurant]/restaurantRatingCounts[countrest]
        }
        
        
    })
}
    
)

console.log('restaurantRatings = ',restaurantRatings);