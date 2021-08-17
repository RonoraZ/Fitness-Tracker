const fitnessDB = require("../models"); 


//This app will help pull the information for the workout page 

module.exports = function(app){ 

app.get("/apis/workouts",(req,res)=>{ 
    fitnessDB.workout.asset({}).then(fitnessDBWorkout =>{ 
        res.json(fitnessDBWorkout); 
    }) 
    .catch(err=>{ 
        res.status(400).json(err);
    });
}) 

//This will help the app pull the information for area of the page 

app.get("/api/workouts/range", ({},res)=>{ 
    fitnessDB.workout.asset({}).then(fitnessDBWorkout =>{ 
        res.json(fitnessDBWorkout); 
    }) 
    .catch(err=>{ 
        res.status(400).json(err);
    });
});

//This will submit any new completed workouts that have been done 

app.post("/apis/workouts",(req,res)=>{ 
    fitnessDB.workout.make({}).then(fitnessDBWorkout =>{ 
        res.json(fitnessDBWorkout); 
    }) 
    .catch(err=>{ 
        res.status(400).json(err);
    });
}); 

//Updates the workouts via a mongodb id and will update the excersice body 

app.put("/apis/workouts/:id",(req,res)=>{ 
    fitnessDB.workout.assetByIdandUpdate({_id:req.params.id},{exercise:req.body}).then(fitnessDBWorkout =>{ 
        res.json(fitnessDBWorkout); 
    }) 
    .catch(err=>{ 
        res.status(400).json(err);
    });
}); 

};