var friendsData = require("../data/friends");

//Routing
module.exports = function(app) {
  // API GET Requests

  app.get("/api/friends", function(req, res) {
    res.json(friendsData);
  });

  app.post("/api/friends", function(req, res) {
    var bestie = findBestFriend(req.body);
    friendsData.push(req.body);
    res.json(bestie);
  });
};

function findBestFriend(data) {
  //Grabs survey scores to compare with other scores in array.
  var newFriendScores = data.scores;
  var friendsArray = friendsData;
  console.log(friendsArray);
  var scoresArray = [];

  //Run through all current friends in list.
  for (var i = 0; i < friendsData.length; i++) {
    var totalDiff = 0;
    //Run through and compare scores.
    for (var j = 0; j < newFriendScores.length; j++) {
      console.log(friendsData[i]);
      console.log(friendsData[i].scores[j]);
      console.log(newFriendScores[j]);
      totalDiff += Math.abs(
        parseInt(friendsData[i].scores[j]) - parseInt(newFriendScores[j])
      );
    }
    //Push into scores Array.
    scoresArray.push(totalDiff);
  }

  //After comparison, find best match.
  var lowscore = 1000;
  var bestMatch;
  for (var i = 0; i < scoresArray.length; i++) {
    if (scoresArray[i] < lowscore) {
      lowscore = scoresArray[i];
      bestMatch = i;
    }
  }
  return friendsArray[bestMatch];
}
