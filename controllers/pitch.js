var Pitch = require("../models/Pitch");

module.exports = {
  insert: function(req, res) {
    Pitch.create(req.body).then(function(doc) {
      res.json(doc);
    }).catch(function(err) {
      res.json(err);
    });
  }
};