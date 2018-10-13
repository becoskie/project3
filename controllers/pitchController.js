const db = require("../models");
const mongoose = require("mongoose");


module.exports = {
create: function(req, res) {
console.log("Inside Create function");
   db.Pitch.create(req.body).then(function(data) {
    
     res.json(data);
     res.statusMessage = "You created a Record!!";
   }).catch(function(err) {
     res.json(err);
   });
 },

 findAll: function(req, res) {
   db.Pitch.find().then(function(data) {
     res.statusMessage = "Here are all your records!!";
     res.json(data);
     console.log(data);
   }).catch(function(err) {
     res.json(err);
   });
 },

 insert: function(req, res) {
   db.Pitch.create(req.body).then(function(data) {
     res.json(data);
   }).catch(function(err) {
     res.json(err);
   });
 },
 delete: function(req, res) {
   db.Pitch.remove({
     _id: req.params.id
   }).then(function(data) {
     res.json(data);
   }).catch(function(err) {
     res.json(err);
   });
 }
};

