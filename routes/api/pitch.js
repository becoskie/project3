// const router = require("express").Router();
const express = require('express');
const router = express.Router();

const pitchController = require("../../controllers/pitchController");

//
router.get('/', (req, res) => {
    pitchController.find()
    .sort({ date:-1})
    .then()
})




// router
// .route("/api/pitches")
// .post(pitchController.create);

// //
// router
// .route("/api/all")
// .get(pitchController.findAll);   

//
// router
// .route("/api/pitches")
// .get(pitchController.findById);

// //
// router
// .route("/api/pitches")
// .post(pitchController.findById);

module.exports = router;