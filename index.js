const express = require("express");

const db = require('./config/mongoose')
const app = express();

port = 8001;

app.use('/',require('./routes'))


// set up a view engine
app.set('view engine', 'ejs');

app.set('views','./views')

app.listen(port,function(err){
    if(err){
        console.log(`Error in running the server ${err}`)
    }
    console.log(`Server is running on server ${port}`)
})