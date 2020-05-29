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
    console.log("Saying hello!")
    // var query = {};
    // if (req.query.author_id) {
    //   query.AuthorId = req.query.author_id;
    // }
    // // Here we add an "include" property to our options in our findAll query
    // // We set the value to an array of the models we want to include in a left outer join
    // // In this case, just db.Author
    // db.Post.findAll({
    //   where: query,
    //   include: [db.Author]
    // }).then(function(dbPost) {
    //   res.json(dbPost);
    // });
  });


// POST route for saving a new post
  app.post("/api/workout", function(req, res) {
    console.log(req);
    db.Workout.create(req)
    .then(dbWorkout => {
        res.json(dbWorkout);
    });
  });


//   // Get route for retrieving a single post
//   app.get("/api/posts/:id", function(req, res) {
//     // Here we add an "include" property to our options in our findOne query
//     // We set the value to an array of the models we want to include in a left outer join
//     // In this case, just db.Author
//     db.Post.findOne({
//       where: {
//         id: req.params.id
//       },
//       include: [db.Author]
//     }).then(function(dbPost) {
//       res.json(dbPost);
//     });
//   });





// var db = require("../models");

// module.exports = function(app) {
//   app.get("/api/authors", function(req, res) {
//     // Here we add an "include" property to our options in our findAll query
//     // We set the value to an array of the models we want to include in a left outer join
//     // In this case, just db.Post
//     db.Author.findAll({
//       include: [db.Post]
//     }).then(function(dbAuthor) {
//       res.json(dbAuthor);
//     });
//   });

//   app.get("/api/authors/:id", function(req, res) {
//     // Here we add an "include" property to our options in our findOne query
//     // We set the value to an array of the models we want to include in a left outer join
//     // In this case, just db.Post
//     db.Author.findOne({
//       where: {
//         id: req.params.id
//       },
//       include: [db.Post]
//     }).then(function(dbAuthor) {
//       res.json(dbAuthor);
//     });
//   });

//   app.post("/api/authors", function(req, res) {
//     db.Author.create(req.body).then(function(dbAuthor) {
//       res.json(dbAuthor);
//     });
//   });

//   app.delete("/api/authors/:id", function(req, res) {
//     db.Author.destroy({
//       where: {
//         id: req.params.id
//       }
//     }).then(function(dbAuthor) {
//       res.json(dbAuthor);
//     });
//   });

// };

}