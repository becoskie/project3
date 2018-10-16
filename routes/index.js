const path = require("path");
const router = require("express").Router();
const apiRoutes = require("./api")

//helps prepend all routes with api
router.use("/", apiRoutes);

// if no api routes are hit, send to react app to public html page
router.use(function(req, res){
    res.sendFile(path.join(__dirname, "../client/public/index.html"))
});

module.exports = router;