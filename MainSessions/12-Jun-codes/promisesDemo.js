
var promise = new Promise(
    function(resolve,reject){
        const x ="edureka";
        const y = "edureka";
        if(x==y){
            resolve();
        }else{
            reject();
        }
    }


)

promise.
then( function(){
    console.log("sucess!!your promised is resolved and resolve function executed")
}

).catch( function(){
    console.log("Sorry!!your promised retunred an error")
}

)