const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const WorkoutSchema = new Schema(
    {
        date: {
            type: Date,
            default: Date.now
          },

        exercises: [
          {
            type: {
                type: String,
                trim: true,
                required: "Exercise type is Required"
              },
            name: {
                type: String,
                trim: true,
                required: "Exercise name is Required"
              },
            duration: {
                type: Number,
                required: [true, "Exercise duration is reuired in minutes"]
              },
            weight: {
                type: Number,
                validate: [({ value }) => value > 0, "Weight must be greater than zero."]
              },
            reps: {
                type: Number,
                validate: [({ value }) => value > 0, "Reps must be greater than zero."]
              },
            sets: {
                type: Number,
                validate: [({ value }) => value > 0, "Sets must be greater than zero."]
              },
            distance: {
                type: Number,
                validate: [({ value }) => value > 0, "Distance must be greater than zero."]
              },
          }
        ]
});

const Workout = mongoose.model("Workout", WorkoutSchema);

module.exports = Workout;