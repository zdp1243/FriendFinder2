var friendsData = require("../data/friendsData");

// var waitListData = require("../data/waitinglistData");

//Routing
module.exports = function(app) {
  // API GET Requests

  app.get("/api/friends", function(req, res) {
    res.json(tableData);
  });

  app.post("/api/friends", function(req, res) {
    //Grabs survey scores to compare with other scores in array.
    var newFriendScores = req.body.scores;
    var friendsArray = [];
    var friendCount = 0;
    var bestMatch = 0;

    //Run through all current friends in list.
    for (var i = 0; i < friendsData.length; i++) {
      var totalDiff = 0;

      //Run through and compare scores.
      for (var j = 0; j < newFriendScores.length; j++) {
        totalDiff += Math.abs(
          parseInt(friendsData[i].scores[j]) - parseInt(newFriendScores[j])
        );
      }

      //Push into scores Array.
      scoresArray.push(totalDiff);
    }

    //After comparison, find best match.
    for (var i = 0; i < scoresArray[bestMatch]; ) {
      bestMatch = i;
    }
  });

  //Return Best Match.
  var bestie = friendsData[bestMatch];
  res.json(bestie);

  //Pushes new friend data into friendsArray.
  friendsArray.push(req.body);
};

//Clear Data

app.post("/api/clear", function() {
  // Empty out the array of data
  friendsData = [];

  console.log(friendsData);
});
