var express = require('express');

var app = express();

const port = 4000;


app.set('view engine','ejs');

app.get('/listCourses',(req,res)=>{
    let course=[
        {name:"react"},
        {name:"node js"},
        {name:"javascript"},
        {name:"html&css"}
    ]

    res.render('courses',{fsdCourses:course});
}

)

app.get('/',(req,res)=>{
    res.send('Welcome to Fullstack web development internship training')    

}

)

app.get('/welcome',(req,res)=>{
    res.send('Welcome user!!please signup')    

}

)

app.get('/createaccount',(req,res)=>{
    res.send('create your FREE account!!')    

}

)

app.get('/courseDetails',(req,res)=>{
    var courseInfo = {
        courseName:"FSWDI",
        courseDuration:"4 months",
        courseMode:"online"

    }

    res.send(courseInfo)
}

)

app

app.listen(port,
    ()=>{
        console.log('server is up and running on the port ' , port)
    }

);


