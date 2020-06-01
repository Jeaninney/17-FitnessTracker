const express = require("express");
const logger = require("morgan");
const mongoose = require("mongoose");

const PORT = process.env.PORT || 3000;

const db = require("./models");
const app = express();

app.use(logger("dev"));

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(express.static("public"));

// var MONGODB_URI = process.env.MONGODB_URI || "mongodb://localhost/workout";

// mongoose.connect(MONGODB_URI, { useNewUrlParser: true, useFindAndModify: false });


var MONGODB_URI = process.env.MONGODB_URI || "mongodb://user:password1@ds219078.mlab.com:19078/heroku_rxbrt57h";

mongoose.connect(MONGODB_URI, { useNewUrlParser: true, useFindAndModify: false, useMongoClient: true });

// Routes
// =============================================================
require("./routes/api-routes")(app);
require("./routes/html-routes")(app);

app.listen(PORT, () => {
  console.log(`App running on port ${PORT}!`);
});