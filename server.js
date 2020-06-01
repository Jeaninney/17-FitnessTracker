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


var MONGODB_URI = process.env.MONGODB_URI || "mongodb://user:password1@ds133597.mlab.com:33597/heroku_kk2xp3jw";

mongoose.connect(MONGODB_URI, { useMongoClient: true, useNewUrlParser: true, useFindAndModify: false });

// Routes
// =============================================================
require("./routes/api-routes")(app);
require("./routes/html-routes")(app);

app.listen(PORT, () => {
  console.log(`App running on port ${PORT}!`);
});