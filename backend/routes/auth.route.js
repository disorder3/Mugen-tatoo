const express = require("express");
const router = express.Router();
const { signin, signup } = require("../controllers/auth.controller");
const {
  signinValidations,
  signupValidations,
  catchErrors,
} = require("../middlewares/validations");

// Signup route
router.post("/signup", signupValidations, catchErrors, signup);

// Signin route
router.post("/signin", signinValidations, catchErrors, signin);

module.exports = router;
