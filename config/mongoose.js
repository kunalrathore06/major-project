//  require the library 
const mongoose = require("mongoose");

// making the connecton to the database 
mongoose.connect('mongodb://localhost/major_project_db');

// aquire the database (to check if it is successfully connected or not)
const db = mongoose.connection;

// error 
db.on('error', console.error.bind(console, "error connecting too db"));


// up and running the print message 
db.once('open', function(){
    console.log("successfully connected to database")
})