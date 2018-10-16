const pitchController = require('../../controllers/pitchController')
const router = require('express').Router();
const db = require('../../models')



//   Worked before
// route Get request to api/pitches
// will get all items
router.route('/pitches')
  .post((req, res) => {
    const newPitch = new Pitch ({
                title: req.body.title,
                description: req.body.description
            })
        db.Pitch.create(pitchData)
        .then(result => {
            res.json(result)
        })
  })


// router.route('/pitches/:id')
//   .put((req, res) => {
//     const dbUser = res.locals.user.dbUser
//     const { title, teaser, body, tags, isDraft, categoryName } = req.body
//     const updateData = { title, teaser, body, tags, isDraft, categoryName }

//     if (dbUser._id.toString() === req.params.id) {
//       db.Post
//         .findByIdAndUpdate(req.params.id, updateData)
//         .then(() => res.json(true))
//         .catch(err => {
//           console.log(err)
//           res.status(500).json(err)
//         })
//     } else {
//       res.sendStatus(403)
//     }
//   })

// TODO: add check to esure only one vote per user
router.route('/posts/:id/vote')
  .get((req, res) => {
    const dbUser = res.locals.user.dbUser
    db.Post.findByIdAndUpdate(req.params.id, { $push: { voters: dbUser._id } })
  })
module.exports = router