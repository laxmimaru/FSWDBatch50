
var a = 10;
var b = 20;
var c = a+b;

console.log("value of  c = "+ c); //Es5

console.log(`value of  c = ${c}`)//ES6

/*Regular Expressions*/

var str1 = "Fullstack web development internship program "
var pattern = /pro/i;

var result = str1.match(pattern);

console.log(result);