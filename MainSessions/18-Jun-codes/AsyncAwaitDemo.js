 async function asyncDemo(){

    return "I am returning a promise";
}

console.log( asyncDemo());

function asyncAwaitDemo(){

    let promiseVar = new Promise(
        (resolve,reject)=>{
            setTimeout(()=> resolve("I am resolved value"),3000)
        }
    )
    
    console.log(promiseVar);
    return promiseVar;
}

console.log("wait for result");

let result = asyncAwaitDemo();

console.log(result);
