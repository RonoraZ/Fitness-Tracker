//Creating the server conneciton for the application 

const express = require("express"); 
const mongoose = require("mongoose");  
const logger = require("morgan"); 

app.use(logger('dev'));

//Setting up express
const PORT = process.env.PORT||27017;
const app = express(); 
//Setting up the routes 
app.use(require("./routes/apis.js"));
app.use(require("./routes/view.js"));

//Setting up express to pass the data 

app.use(express.json()); 
app.use(express.urlencoded({extended:true}));  
app.use(express.static("public"));

//Connecting MongoDB 

mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/workout", {
  useNewUrlParser: true,
  useFindAndModify: false, 
  
});

app.listen(PORT, () => {
  console.log(`App running on port ${PORT}!`);
});