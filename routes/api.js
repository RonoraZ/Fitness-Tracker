const Workout = require("../models/workout.js");   
const mongoose = require("mongoose"); 
const express = require("express");
const router = require("express").Router(); 




//This app will help pull the information for the workout page 
 

router.get("/api/workout",(req,res)=>{ 
    Workout.find({}).then(dbWorkouts =>{ 
        res.json(dbWorkouts); 
    }) 
    .catch(err=>{ 
        res.status(400).json(err);
    });
}) 

//This will help the app pull the information for area of the page  

router.get("/api/workout/range", ({},res)=>{ 
    Workout.find({}).limit(5).then(dbWorkouts =>{ 
        res.json(dbWorkouts); 
    }) 
    .catch(err=>{ 
        res.status(400).json(err);
    });
});

//This will submit any new completed workouts that have been done 

router.post("/api/workout",({body},res)=>{ 
    Workout.create(body).then(dbWorkouts =>{ 
        res.json(dbWorkouts); 
    }) 
    .catch(err=>{ 
        res.status(400).json(err);
    });
}); 

//Updates the workouts via a mongodb id and will update the excersice body 

router.put("/api/workout/:id",({body,params},res)=>{ 
    Workout.findByIdAndUpdate(params.id,{$push:{exercise:body}},{new:true}).then(dbWorkout =>{ 
        res.json(dbWorkout); 
    }) 
    .catch(err=>{ 
        res.status(400).json(err);
    });
}); 



module.exports= router;