const express = require("express");

const router = express.Router();

const userSignUpController = require("../controller/userSignUp.js");
const userSignInController = require("../controller/userSignIn.js");
const authToken = require("../middleware/authToken.js");
const userDetailsController = require("../controller/userDetails.js");
const userLogout = require("../controller/userLogout.js");

router.post("/signup", userSignUpController);
router.post("/signin", userSignInController);
router.get("/user-details", authToken, userDetailsController);
router.get("/userLogout", userLogout);

module.exports = router;
