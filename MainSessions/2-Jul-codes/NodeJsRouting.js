var http = require('http');


http.createServer(
    (req,res)=>{
        res.write("node js routing demo")
        

        res.writeHead(200,{'content-Type':'text/html'});
        var url = req.url;
        if(url === 'about'){
            res.write("you are in the about page");
            res.end()
        }else if(url === '/coursedetails'){
            res.write('you are in the course details')
            res.end()
        }else{
            res.write('Nothing')
            res.end()
        }



        
    }
).listen(3000,()=>{
    console.log("server is up and running")
}

)