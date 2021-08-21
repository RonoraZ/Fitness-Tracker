const Workout = require("../models/workout.js");   
const mongoose = require("mongoose"); 
const express = require("express");
const router = require("express").Router(); 




//This app will help pull the information for the workout page 
 

router.get("/apis/workouts",(req,res)=>{ 
    Workout.find({}).then(dbWorkouts =>{ 
        res.json(dbWorkouts); 
    }) 
    .catch(err=>{ 
        res.status(400).json(err);
    });
}) 

//This will help the app pull the information for area of the page  

router.get("/api/workouts/range", ({},res)=>{ 
    Workout.find({}).limit(5).then(dbWorkouts =>{ 
        res.json(dbWorkouts); 
    }) 
    .catch(err=>{ 
        res.status(400).json(err);
    });
});

//This will submit any new completed workouts that have been done 

router.post("/apis/workouts",(req,res)=>{ 
    Workout.create({day:Date.now()}).then(dbWorkouts =>{ 
        res.json(dbWorkouts); 
    }) 
    .catch(err=>{ 
        res.status(400).json(err);
    });
}); 

//Updates the workouts via a mongodb id and will update the excersice body 

router.put("/apis/workouts/:id",(req,res)=>{ 
    Workout.findOneandUpdate({_id:req.params.id},{$push:{exercise:req.body}},{new:true}).then(dbWorkout =>{ 
        res.json(dbWorkout); 
    }) 
    .catch(err=>{ 
        res.status(400).json(err);
    });
}); 



module.exports= router;