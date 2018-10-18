//newly created schema in the database for pitch

const mongoose = require("mongoose");
const Schema = mongoose.Schema;


//create schema 
const PitchSchema = new Schema({
  title: { 
    type: String, 
    required: true 
  },
  description: { 
    type: String, 
    required: true 
  },
  date: { 
    type: Date, 
    default: Date.now 
  },
  // url: { 
  //   type: String, 
  //   required: true 
  // }
});


const Pitch = mongoose.model("Pitch", PitchSchema);

module.exports = Pitch;

