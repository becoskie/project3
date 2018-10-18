const express = require('express');
const router = express.Router();
const pitchController = require("../../controllers/pitchController");

router.route('/pitches')
.get((req, res) => {
    db.Pitch
        .find()
        .then(pitches => res.json(pitches))
        .catch(err => res.status(500).json(err))
})

// router.route('/pitches/:id')
//     .get(pitchController.findById)


//Worked before
//route Get request to api/pitches
//will get all items
// router.post('/pitch', (req, res) => {
//     const newPitch = new Pitch ({
//         title: req.body.title,
//         description: req.body.description
//     });
//     // console.log("this is the req body", req.body);
//     // console.log(newPitch, "new Pitch is in this variable");
//     newPitch.save()
//     .then(pitch => res.json(pitch))
//     .catch(err => res.status(422).json(err));
// });

//this is the get route
// router
// .route('/api/allpitches')
// .get(pitchController.findAll);



module.exports = router;