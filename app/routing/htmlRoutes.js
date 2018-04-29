//Dependencies
var path = require("path");

//Routing
module.exports = function(app) {
  // HTML GET Requests

  app.get("/survey", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/friends.html"));
  });

  // Default to Home if no matching route.
  app.get("*", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/home.html"));
  });
};
