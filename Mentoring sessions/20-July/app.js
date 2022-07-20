const express = require('express')
const bodyParser = require('body-parser')
const routes = require('./Routes/routes')


const port = 3000;

const app = express();



app.use(bodyParser.json());

//CORS - cross origin resoure sharing

app.use((req,res,next)=>{
    res.setHeader('Acess-Control-Allow-Origin','*')
    res.setHeader('Acess-Control-Allow-Methods','GET,POST,PUT,PATCH,DELETE')
    res.setHeader('Acess-Control-Allow-Headers','Content-Type , Authorization')
    next();
}

)

app.use('/',routes)

app.listen(port,()=>{
    console.log("my server is up and running on the port = " , port)
}

)