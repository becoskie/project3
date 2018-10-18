const db = require("../models");
const mongoose = require("mongoose");
 module.exports = {
create: (req, res) => {
   db.Pitch
   .create(req.body)
   .then(result => {
     res.json(result);
   })
   .catch(err => res.status(500).json(err))
 },
  findAll: function(req, res) {
   db.Pitch
   .find()
   .sort({ date: "desc"})
   .then(result => res.json(result))
   .catch(err => res.status(500).json(err))
 },
  findById: (req, res) => {
  db.Pitch
    .findById(req.params.id)
    .then(result => {
      console.log(result)
      if (!result) {
        res.status(404)
      } else {
        res.json(result)
      }
    })
    .catch(err => res.status(500).json(err))
},
  insert: function(req, res) {
   db.Pitch.create(req.body).then(function(data) {
     res.json(data);
   }).catch(function(err) {
     res.json(err);
   });
 },
 remove: (req, res) => {
  db.Pitch
    .findByIdAndRemove(req.params.id)
    .then(result => res.json(result))
    .catch(err => res.status(500).json(err))
},
};