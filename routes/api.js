const Workout = require("../models/workout.js");   
const mongoose = require("mongoose"); 
const express = require("express");
const router = require("express").Router(); 




//This app will help pull the information for the workout page 
 

router.get("/api/workout",(req,res)=>{ 
    Workout.aggregate([ 
        { 
            $addFields:{ 
                totalDuration:{ 
                    $sum:'exercise.duration',
                },
            },
        },
    ]).then(Workouts =>{ 
        res.json(Workouts); 
    }) 
    .catch(err=>{ 
        res.status(400).json(err);
    });
}) 

//This will help the app pull the information for area of the page  

router.get("/api/workout/range", ({},res)=>{ 
    Workout.aggregate([ 
        { 
            $addFields:{ 
                totalDuration:{ 
                    $sum:'excercise.duration',
                },
            },
        }
    ])  .sort({_id:-1})
        .limit(5)
        .then(Workouts =>{ 
        res.json(Workouts); 
    }) 
    .catch(err=>{ 
        res.status(400).json(err);
    });
});

//This will submit any new completed workouts that have been done 

router.post("/api/workout",({body},res)=>{ 
    Workout.create(body).then(Workouts =>{ 
        res.json(Workouts); 
    }) 
    .catch(err=>{ 
        res.status(400).json(err);
    });
}); 

//Updates the workouts via a mongodb id and will update the excersice body 

router.put("/api/workout/:id/:data",({body,params},res)=>{ 
    Workout.findByIdAndUpdate(params.id,{$push:{exercise:JSON.parse(params.data)}},{new:true}).then(Workouts =>{ 
        res.json(Workouts); 
    })   
        console.log(body)
        .catch(err=>{ 
        res.status(400).json(err);
    });
});  

// router.put("/api/workout/:id", ({ body, params}, res) => {
//     console.log( body, params);
  
//     Workout.findOneAndUpdate(
//       { _id: params.id },
//       { $push: { exercises: body } },
//       { new: true ,runValidators: true}
//     )
//       .then((Workout) => {
//         res.json(Workout);
//       })
//       .catch((err) => {
//         res.json(err);
//       });
//   });



module.exports= router;