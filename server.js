var express = require("express");
var bodyParser = require("body-parser");
var path = require("path");
// var css = require("css");

var app = express();

// Set port.
var PORT = process.env.PORT || 8080;

// Sets up Express app to handle data parsing.
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
//Not sure if I need this.
app.use(bodyParser.text());
app.use(bodyParser.json({ type: "application/vnd.api + json" }));

// Route Files.
require("./app/routing/apiRoutes")(app);
require("./app/routing/htmlRoutes")(app);

//Listener
app.listen(PORT, function() {
  console.log("App listening on PORT: " + PORT);
});
