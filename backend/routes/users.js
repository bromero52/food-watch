const router = require("express").Router();
let User = require("../models/user.model");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const passport = require("passport");
require("body-parser");

//  get requests to 'http://host/' returns all users from DB
router.route("/").get((req, res) => {
  User.find()
    .then((users) => res.json(users))
    .catch((err) => res.status(400).json("Error: " + err));
});

// post req to "http://host/add"
router.route("/add").post((req, res) => {
  const username = req.body.username;
  const firstName = req.body.firstName;
  const lastName = req.body.lastName;
  const email = req.body.email;

  /*
  Hash passwords or use SSL/TLS
*/

  const newUser = new User({ username, firstName, lastName });

  newUser
    .save()
    .then(() => res.json("User added!"))
    .catch((err) => res.status(400).json("Error: " + err));
});

// app.post('/api/posts', function (req, res, next) {
//   var post = new Post({
//     username: req.body.username,
//     body: req.body.body
//   })
//   post.save(function (err, post) {
//     if (err) { return next(err) }
//     res.json(201, post)
//   })
// })

router.post("/register", (req, res) => {
  console.log("reg put");
  User.findOne({ email: req.body.email }).then((user) => {
    if (user) {
      res.status(400).json({ email: "Email already exists" });
    } else {
      const newUser = new User({
        username: req.body.username,
        email: req.body.email,
        firstName: req.body.firstName,
        lastName: req.body.lastName,
        password: "", // Avoid "required" Mongo error by setting to null
      });

      console.log(newUser);

      // Hash password before saving in database
      bcrypt.genSalt(10, (err, salt) => {
        bcrypt.hash(newUser.password, salt, (err, hash) => {
          newUser.password = hash;
          newUser
            .save()
            .then((user) => res.json(user))
            .catch((err) => console.log(err));
        });
      });
    }
  });
});

module.exports = router;
