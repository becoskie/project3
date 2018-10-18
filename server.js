const express = require("express");
const path = require("path");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const morgan = require('morgan');
const session = require('express-session');
const passport = require('./passport');

const routes = require("./routes");
//db config to mlab 
// const db = require('./config/keys').mongoURI;


const PORT = process.env.PORT || 3001;
const app = express();
const user = require('./controllers/user');
const User = require('./models/user');

// Define middleware here
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(morgan('dev'))


// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}
app.use(routes);



// sessions
app.use(
	session({
		secret: 'fraggle-rock', //pick a random string to make the hash that is generated secure
		resave: false, //required
		saveUninitialized: false //required
	})
);

// Passport
app.use(passport.initialize())
app.use(passport.session()) // calls the deserializeUser
passport.serializeUser(function(user, done) {
  done(null, user.id);
});

passport.deserializeUser(function(id, done) {
  User.findById(id, function(err, user) {
    done(err, user);
  });
});

app.use( (req, res, next) => {
	console.log('req.session', req.session);
	next()
  });

// Define API routes here


// app.use('/user', user)
// const pitchController = require(./controllers/pitchController);
// const router = new express.Router();
// // Define any API routes first
// // Get saved pitchs
// router.get("/api/saved", pitchController.find);
// // Save pitchs
// router.post("/api/saved", pitchController.insert);
// // delete saved pitchs
// router.delete("/api/saved/:id", pitchController.delete);
// // Send every other request to the React app
// router.get("/", function(req, res) {
//  res.sendFile(path.join(__dirname, “./client/build/index.html”));
// });

// app.use(routes);
// Send every other request to the React app
// Define any API routes before this runs
app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "./client/build/index.html"));
});

const db = process.env.MONGODB_URI || "mongodb://localhost/project-3";
mongoose.connect(db, function(error) {
  // Log any errors connecting with mongoose
  if (error) {
    console.error(error);
  }
  // Or log a success message
  else {
    console.log("mongoose connection is successful");
  }
});

//use routes..anything that goes to api uses the pitches route
// app.use('/api/pitch', pitch)

app.listen(PORT, () => {
  console.log(`🌎 ==> Server now on port ${PORT}!`);
});