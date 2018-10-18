const router = require('express').Router();

const pitchAuth = require('./pitchAuth')
const pitchOpen = require('./pitchOpen')

// add param handlers to the router... doesn't seem to work here
// require('./paramHelpers')(router)

// TODO: reorganize routes for more consistency, i.e. pick a convention.
//  As of now it's unclear which router should have a route like `/api/posts/:postId/comments`.
//  Should it be the first entity or last?

// router.use(pitchRouter)

// router.use(authCheck) // Auth Routes go after Open routes and auth middleware

router.use(pitchAuth)
// router.use(userRouter_AUTH)

module.exports = router;