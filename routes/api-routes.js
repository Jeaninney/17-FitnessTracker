// *********************************************************************************
// api-routes.js - this file offers a set of routes for displaying and saving data to the db
// *********************************************************************************

// Dependencies
// =============================================================

// Requiring our models
var db = require("../models");

// Routes
// =============================================================
module.exports = function(app) {

// GET route for getting all of the posts
  app.get("/api/workouts", function(req, res) {
    db.Workout.find({ 
      //include : [db.Post]
    }).then(function(dbWorkout) {
      res.json(dbWorkout);
    });
    console.log("/api/workouts route works");
    //res.send("working");
  });

  app.get("/api/workouts/range", function(req, res){
    db.Workout.find({

    }).then(function(dbWorkout) {
      res.json(dbWorkout);
    });
    console.log("The workouts api route is working");
  });

  


// POST route for saving a new post
  app.post("/api/workouts", function(req, res) {
    db.Workout.create({})
      .then(dbWorkout => {
        res.json(dbWorkout);
      })
      .catch(err => {
        res.json(err);
      });
    });

  app.put("/api/workouts/:id", (req, res) => {
    db.Workout
      .findByIdAndUpdate(req.params.id, 
        {
          $push: {exercises: req.body}  
        },{
          new: true,runValidators:true
        }).then(dbObject => {
          console.log(dbObject);
          res.json(dbObject);
        }).catch(err => {
          res.json(err);
        });
  });
}