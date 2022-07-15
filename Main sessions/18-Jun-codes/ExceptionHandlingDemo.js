
const a = 20;

console.log("a = "+a);

const b = 30;

try{
    console.display("b = "+b);
}
catch(e){
    console.log("The error occured = "+ e.message);

}
finally{
    console.log("The finally block executed")
}

const c = 40;

console.log("c = "+c);