const mongoose = require("mongoose"); 
const Schema = mongoose.Schema; 

//Developing a schema db that will be pulled once each attribute is met.

const FitnesSchema = new Schema({ 
    day:{ 
        type:Date, 
        default:Date.now
    }, 
    exercises:[ 
        { 
            type:{ 
                type:String,
                trim:true, 
                required:true 
            }, 
            name:{ 
                type:String,
                trim:true, 
                required:true 
            }, 
            duration:{ 
                type:String, 
                required:true 
            }, 
            weight:{ 
                type:Number,
                 
            }, 
            reps:{ 
                type:Number,
                
            }, 
            sets:{ 
                type:Number,
                
            }, 
            distance:{ 
                type:Number,
                
            },
        }
    ] 
   
}); 

const Fitness = mongoose.model(Fitness,FitnesSchema);