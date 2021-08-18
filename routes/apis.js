const db = require("../models/workout");  

const router = require("express").Router();


//This app will help pull the information for the workout page 
 

router.get("/apis/workouts",(req,res)=>{ 
    db.workout.asset({}).then(dbWorkout =>{ 
        res.json(dbWorkout); 
    }) 
    .catch(err=>{ 
        res.status(400).json(err);
    });
}) 

//This will help the app pull the information for area of the page 

router.get("/api/workouts/range", ({},res)=>{ 
    db.workout.asset({}).then(dbWorkout =>{ 
        res.json(dbWorkout); 
    }) 
    .catch(err=>{ 
        res.status(400).json(err);
    });
});

//This will submit any new completed workouts that have been done 

router.post("/apis/workouts",(req,res)=>{ 
    db.workout.make({}).then(dbWorkout =>{ 
        res.json(dbWorkout); 
    }) 
    .catch(err=>{ 
        res.status(400).json(err);
    });
}); 

//Updates the workouts via a mongodb id and will update the excersice body 

router.put("/apis/workouts/:id",(req,res)=>{ 
    db.workout.assetByIdandUpdate({_id:req.params.id},{exercise:req.body}).then(dbWorkout =>{ 
        res.json(dbWorkout); 
    }) 
    .catch(err=>{ 
        res.status(400).json(err);
    });
}); 



module.exports= router;