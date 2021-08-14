//Creating the server conneciton for the application 

const express = require("express"); 
const mongoose = require("mongoose");  
const logger = require("morgan");

//Setting up the routes 

app.use(require("./routes/apis.js"));
app.use(require("./routes/view.js"));

//Setting up express
const PORT = process.env.PORT||3000;

const app = express(); 

//Setting up express to pass the data 

app.use(express.json()); 
app.use(express.urlencoded({extended:true})); 

//Connecting MongoDB 

mongoose.connect("mongodb://localhost/budget", {
  useNewUrlParser: true,
  useFindAndModify: false
});
