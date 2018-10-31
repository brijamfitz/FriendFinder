// Load Data
// =================================================================
var friends = require("../data/friends");

module.exports = function(app) {
  // API Routes
  // =================================================================
  // Display JSON data when client requests this path
  app.get("/api/friends", function(req, res) {
    return res.json(friends);
  });
  // Posts client data at this path and handles all logic
  app.post("/api/friends", function(req, res) {
    friends.push(req.body);
    res.json(true);
  });
};
