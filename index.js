const express = require("express");
const app = express();

port = 8001;

app.use('/',require('./routes'))

app.listen(port,function(err){
    if(err){
        console.log(`Error in running the server ${err}`)
    }
    console.log(`Server is running on server ${port}`)
})