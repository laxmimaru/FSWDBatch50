orderData = {
    'Below 500':20,
    '500-1000':29,
    '1000-1500':30,
    '1500-2000':44,
    'above 2000':76
}

/*1)Total number of orders placed*/

function ordersTotal(Total,orderAmount){    
    return orderAmount+Total;
}

console.log(Object.keys(orderData))
console.log(Object.values(orderData))



let totalNoOfOrders = Object.values(orderData).reduce(ordersTotal)
console.log('totalOrderAmount = ' , totalNoOfOrders);

/*2- proportion of a order category  =  (no of orders of that category /total no of orders)*/

let orderProportions = {};
let round=0;
Object.keys(orderData).map((key)=>{
    round = Math.round((orderData[key] / totalNoOfOrders) * 100);
    orderProportions[key] = round+"%" ;
}
)

console.log('orderProportions = ' , orderProportions);


console.log(Object.values(orderProportions))

let totalPercent = Object.values(orderProportions).reduce(ordersTotal)

console.log('totalPercent = ' , totalPercent)



