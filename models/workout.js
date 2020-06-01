const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const WorkoutSchema = new Schema(
  {
    day: {
      type: Date,
      default: () => Date()
    },
    // day: {
    //   type: Date,
    //   default: Date.now
    // },

    exercises: [
      {
        type: {
          type: String,
          trim: true,
          required: "Type is Required"
        },
        name: {
          type: String,
          trim: true,
          required: "Name is Required"
        },
        duration: {
          type: Number,
          required: "Duration is reuired"
        },
        weight: {
          type: Number,
          // validate: [({ value }) => value > 0, "Weight must be greater than zero."]
        },
        reps: {
          type: Number,
          // validate: [({ value }) => value > 0, "Reps must be greater than zero."]
        },
        sets: {
          type: Number,
          // validate: [({ value }) => value > 0, "Sets must be greater than zero."]
        },
        distance: {
          type: Number,
          // validate: [({ value }) => value > 0, "Distance must be greater than zero."]
        },
      }
    ]}, {
      toJSON: {
        virtuals: true
      }
    },{
      collection: 'workout'
});

WorkoutSchema
  .virtual("totalDuration")
  .get(function() {
  //add all of the exercises from the array down to just the sum of all of their durations
  return this.exercises.reduce((total, exercise) => {
    return total + exercise.duration;
  }, 0);
});

const Workout = mongoose.model("Workout", WorkoutSchema);

module.exports = Workout;