const express = require('express')
const bodyParser = require('body-parser')
const routes = require('./Routes/routes')
const mongoose = require('mongoose');


const port = 3006;

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

mongoose.connect('mongodb://127.0.0.1:27017/zomato',
    {
        useNewUrlParser:true,
        useUnifiedTopology:true
    }
).then(()=>{
    app.listen(port,()=>{
        console.log('server is running on port ' , port)
    });
}
    
).catch((err)=>{
    console.log(err)
}

)
