const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const jwt = require("jsonwebtoken");
mongoose.connect('mongodb://127.0.0.1:27017', {
    dbName: 'users',
    useNewUrlParser: true,
    useUnifiedTopology: true
}, err => err ? console.log(err) : 
    console.log('Connected to users database'));
// Schema for users of app
const UserSchema = new mongoose.Schema({
	username: {
		type: String,
		required: true,
	},
	email: {
		type: String,
		required: true,
		unique: true,
	},
    password: {
		type: String,
		required: true,
	},
});

  
const User = mongoose.model('users', UserSchema);
// For backend and express
const express = require('express');
const app = express();
const cors = require("cors");
console.log("App listen at port 5000");
app.use(express.json());
app.use(cors());
app.get("/", (req, resp) => {

	resp.send("App is Working");
	// You can check backend is working or not by 
	// entering http://loacalhost:5000
	
	// If you see App is working means
	// backend working properly
});


app.post("/register", async (req, resp) => {
	try {
		const user = new User(req.body);
		let result = await user.save();
		result = result.toObject();
		if (result) {
			delete result.password;
			resp.send(req.body);
			console.log(result);
		} else {
			console.log("User already register");
		}

	} catch (e) {
		resp.send("Something Went Wrong");
	}
});

// login endpoint
app.post("/login", (request, response) => {
	// check if email exists
	User.findOne({ username: request.body.email })
  
	  // if email exists
	  .then((user) => {
		// compare the password entered and the hashed password found
		bcrypt
		  .compare(request.body.password, user.password)
  
		  // if the passwords match
		  .then((passwordCheck) => {
  
			// check if password matches
			if(!passwordCheck) {
			  return response.status(400).send({
				message: "Passwords does not match",
				error,
			  });
			}
  
			//   create JWT token
			const token = jwt.sign(
			  {
				userId: user._id,
				userEmail: user.email,
			  },
			  "RANDOM-TOKEN",
			  { expiresIn: "24h" }
			);
  
			//   return success response
			response.status(200).send({
			  message: "Login Successful",
			  email: user.email,
			  token,
			});
		  })
		  // catch error if password does not match
		  .catch((error) => {
			response.status(400).send({
			  message: "Passwords does not match",
			  error,
			});
		  });
	  })
	  // catch error if email does not exist
	  .catch((e) => {
		response.status(404).send({
		  message: "Email not found",
		  e,
		});
	  });
  });
app.listen(5000);