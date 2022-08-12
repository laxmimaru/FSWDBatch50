

const bodyParser = require('body-parser');
const express = require('express')
const path = require('path')
const app = express()

var port= 3000;

app.set('views',path.join(__dirname))
app.set("view engine","ejs")

app.use(bodyParser.urlencoded({extended:false}))
app.use(bodyParser.json())

app.get("/",(req,res)=>{
    res.render("reqform")
}

)

app.get("/welcome",(req,res)=>{
    res.write("welcome");
}

)

app.post('/saveData',(req,res)=>{
    console.log('first name from body parser = ',req.body.urname);
    console.log('email from body parser = ' , req.body.email);

}

)

app.listen(port,()=>{
    console.log('the server is running on the port ' , port);
}

)