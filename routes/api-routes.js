// *********************************************************************************
// api-routes.js - this file offers a set of routes for displaying and saving data to the db
// *********************************************************************************

// Dependencies
// =============================================================

// Requiring our models
const Workout = require("../models/workout");

// Routes
// =============================================================
module.exports = function(app) {

// GET route for getting all of the posts
  app.get("/api/workouts", function(req, res) {
    Workout.find()
    .then(dbWorkout => {
      res.json(dbWorkout);
    }).catch(err =>{
      res.json(err)
    })
  });

  // POST route for saving a new post
  app.post("/api/workouts", function(req, res) {
    Workout.create({})
      .then(dbWorkout => {
        res.json(dbWorkout);
      })
      .catch(err => {
        res.json(err)
      })
    });

  app.get("/api/workouts/range", function(req, res){
    Workout.find()
      .then(dbWorkout =>{
        res.json(dbWorkout);
      })
      .catch(err =>{
        res.json(err)
      })
    });
  
  app.post("/api/workouts/range", function(req, res) {
    Workout.create({})
      .then(dbWorkout => {
        res.json(dbWorkout);
      })
      .catch(err => {
        res.json(err)
      })
    });

  app.put("/api/workouts/:id", ({body,params}, res) => {
    Workout.findByIdAndUpdate(params.id, 
        {
          $push: {exercises: body}  
        },{
          new: true, runValidators:true
        }).then(dbWorkout => {
          res.json(dbWorkout);
        }).catch(err => {
          res.json(err);
        })
  });
}