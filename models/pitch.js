var mongoose = require("mongoose");

var Schema = mongoose.Schema;

var pitchSchema = new Schema({
  title: String,
  description: String,
  username: String,
  
});

var Pitch = mongoose.model("Pitch", pitchSchema);

module.exports = Pitch;