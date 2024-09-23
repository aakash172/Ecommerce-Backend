const express = require("express");

const router = express.Router();

const userSignUpController = require("../controller/userSignUp.js");
const userSignInController = require("../controller/userSignIn.js");
const authToken = require("../middleware/authtoken.js");
const userDetailsController = require("../controller/userDetails.js");

router.post("/signup", userSignUpController);
router.post("/signin", userSignInController);
router.get("/user-details", authToken, userDetailsController);

module.exports = router;
