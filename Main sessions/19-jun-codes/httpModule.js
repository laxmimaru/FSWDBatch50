var http = require('http');

http.createServer( function(req,res){
    console.log('the http server is created and is up and running on port 8080');
    res.write('Welcome to FUllstack web dev internship program ');
    res.end();
}

).listen(8080)