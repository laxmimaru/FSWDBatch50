
var fruits = new Object();

console.log("type of fruits = "+typeof(fruits));

fruits.name="orange";
fruits.color = "orange color";
fruits.price = 50;

console.log("fruits keys :")

console.log(Object.keys(fruits))

console.log(fruits);

const  vegies = {
    "vegie1":"beans",
    "vegie2":"bitter guard",
    "vegie3":"tomato"

};

console.log("type of vegies = "+typeof(vegies));

console.log(vegies)

console.log("vegies keys")

console.log(Object.keys(vegies))

console.log("vegie1 = " + vegies.vegie1)