const mongoose = require("mongoose");
const bcrypt = require('bcryptjs');

const Schema = mongoose.Schema;

const userSchema = new Schema({
    username: { type: String, unique: false, required: false },
	password: { type: String, unique: false, required: false }
});

// Define schema methods
userSchema.methods = {
	checkPassword: function (inputPassword) {
		return bcrypt.compareSync(inputPassword, this.password)
	},
	hashPassword: plainTextPassword => {
		return bcrypt.hashSync(plainTextPassword, 10)
	}
}

// Define pre hooks for the save method
userSchema.pre('save', function (next) {
	if (!this.password) {
		console.log('models/user.js =======NO PASSWORD PROVIDED=======')
		next()
	} else {
		console.log('models/user.js hashPassword in pre save');
		
		this.password = this.hashPassword(this.password)
		next()
	}
})

console.log("CREATE USER:")

//const User = mongoose.model("User", userSchema);
if(mongoose.models.User) {
	User = mongoose.model("User");
} else {
	User = mongoose.model("User", userSchema);
}

module.exports = User;