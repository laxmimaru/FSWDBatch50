/*ES5 regular function*/
function add(a,b){
    c = a+b;
    return c;

}

var result = add(10,20);

console.log(`result = ${result}`);

/*ES6 arrow function */

add2 = (a,b) =>   a+b;

var result2 = add2(10,20);

console.log(`result2 = ${result2}`);


/*ES6  function Expression*/

sum = function(a,b){
    return a+b
}

c = sum(20,30);

console.log(`sum = ${c}`);

/*IIFE function - Immediately Invoked function Expressions*/


const addition = (
    function(){
        var str = "Full stack web development program";
        return str;
    }

)();

console.log(`addition = ${addition} `)

/*Generator functions */

function* mygenerator(){
    let i = 0;
    for(i = 0;i<10;i++){
        yield i;
    }
}

const gen = mygenerator();

/*for (i = 0;i<10;i++){
    console.log(gen.next().value)
}*/


/**Let and const */

var gscope = 4;
var gscope2;
gscope2 = 5;

console.log(`gscope2 = ${gscope2}`)

/*const val=20;
console.log(`val = ${val}`);*/

val=30;
console.log(`val after change= ${val}`);

function scopDemo(){
    let lscope = 6;
    console.log(`inside scopDemo and gscope = ${gscope} `);
    console.log(`inside scopDemo and  lscope = ${lscope} `)
}

scopDemo();

console.log(`out scopDemo and  gscope = ${gscope} `)
console.log(`out scopDemo and  lscope = ${lscope} `)
