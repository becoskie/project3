const router = require("express").Router();
const pitchRoutes = require("./pitch");

//pitch routes
router.use("/", pitchRoutes);

module.exports = router;