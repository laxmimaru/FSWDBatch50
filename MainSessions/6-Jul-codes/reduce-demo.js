
const arr=[10,20,30,40];

function add(total ,num){
    return total +num;
}

let result = arr.reduce(add);

console.log("result = " , result);