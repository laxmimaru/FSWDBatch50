
var fruits = ["orange","guava","avocado","grapes"];
var vegies = ["tomato","ladies finger","bottle guard","cabbage"];

var nums = [1,3,5,10,20,4,6,7]

var ages = [10,20,15,60,50,13]

console.log(fruits);
console.log(typeof(fruits));

console.log(fruits.length);

function isEven(number){
    console.log('the current element = '+number)
    return number%2 == 0;
}

function addFive(number){
    return number+5;
}

function canVote(age){
    return age>18;
}
/*1)Filter array method*/

var evens = nums.filter(isEven);


console.log("evens = " +evens);
console.log("nums = " +nums);

/* 2) map array method*/

var newArray = nums.map(addFive);

console.log("newArray = " +newArray);
console.log("nums = " +nums);

/*3) Concat array method
*/

var combinedArray = fruits.concat(vegies);
var combinedArray2 = fruits+vegies;

console.log("fruits array = "+fruits);
console.log("vegies = "+vegies);
console.log("combinedArray = "+combinedArray);
console.log("combinedArray2 = "+combinedArray2);

/*
4)push method
*/

console.log("=========push method============");

console.log("fruits = "+fruits);
fruits.push("pineapple");

console.log("new fruits array = "+fruits);

console.log("=========unshift method============");
console.log("fruits = "+fruits);
fruits.unshift("apple");

console.log("new fruits array = "+fruits);

console.log("=========pop method============");
fruits.pop();
console.log("fruits array after pop = "+fruits);

console.log("=========shift method============");
fruits.shift();
console.log("fruits array after shift = "+fruits);

console.log("=========find method============");

console.log("the first qualifying age = " + ages.find(canVote));


console.log("all qualifying ages = " + ages.filter(canVote));

console.log("=========slice method============");

var slicedVegies = vegies.slice(0,2)

console.log("sliced vegies array = " +slicedVegies);
console.log("original vegies array = " +vegies);

console.log("=========sort method============");

console.log("ages array before sorting = "+ages);
ages.sort();
console.log("ages array after sorting = "+ages);

ages.sort(function(a,b){return a-b})
console.log("ages array after sorting = "+ages);



