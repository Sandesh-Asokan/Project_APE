const express = require("express");
const router = express.Router();
const signUpTemplateCopy = require("../models/SignUpModels");
const bcrypt = require("bcrypt");

router.post("/signup", async (req, res, next) => {
  const saltPassword = await bcrypt.genSalt(10);
  const securePassword = await bcrypt.hash(req.body.password, saltPassword);

  const signedUpUser = new signUpTemplateCopy({
    username: req.body.username,
    email: req.body.email,
    password: securePassword,
  });

  signUpTemplateCopy
    .findOne({ email: req.body.email })
    .then((data) => {
      console.log(data);
      if (data) {
        console.log("user already exists!");
        res.json({
          message: {
            msg: "The Email is already registered! Try with another email!",
            result: false,
          },
        });
      } else {
        signedUpUser.save().then((data) => {
          console.log("success!");
          console.log(data);
          res.json({
            message: {
              msg: "Successfully Signed Up as " + data.username,
              result: true,
            },
          });
        });
      }
    })
    .catch((err) => {
      res.json(err);
    });
  (err) => {
    next(err);
  };
});

router.post("/login", (req, res, next) => {
  console.log("backend post received bro, don/'t' worry");
  signUpTemplateCopy
    .findOne({ username: req.body.user })
    .then((data) => {
      if (data) {
        bcrypt.compare(req.body.pass, data.password, function (err, result) {
          if (result) {
            res.json(data);
            console.log(data.password);
            console.log("Vera maarri vera marri !!");
            // log in
          } else {
            console.log("pass wrong");
            err = new Error("Invalid Password");
            err.status = 404;
            res.json(err);
            return next(err);
            // access denied
          }
        });
      } else {
        console.log("user doesn't exists!");
        err = new Error("Invalid Username");
        err.status = 404;
        res.json(err);
        console.log(err);
        return next(err);
      }
    })
    .catch((err) => next(err));
});

module.exports = router;
