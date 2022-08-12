console.log(" setTimeout")

setTimeout(
    ()=>{
        console.log("5ms timer expired");

    }

    ,5000
)

console.log("Hello welcome to asynchrouns programing.")


function y(){
    console.log("I am inside function y");
}

function x(y){
    console.log("Inside function x");
    y();
}

x(y);

