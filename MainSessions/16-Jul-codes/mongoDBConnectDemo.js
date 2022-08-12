const express = require('express')
const MongoClient = require('mongodb').MongoClient;

const port = 3300;

const app = express ();
const mongourl = 'mongodb://localhost:27017';

MongoClient.connect(mongourl,(error,client)=>{

    app.listen(port,()=>{
        console.log('server is up and running ', port)
    }

    )

})

