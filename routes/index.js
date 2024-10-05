const express = require("express");

const router = express.Router();

const userSignUpController = require("../controller/userSignUp.js");
const userSignInController = require("../controller/userSignIn.js");
const authToken = require("../middleware/authToken.js");
const userDetailsController = require("../controller/userDetails.js");
const userLogout = require("../controller/userLogout.js");
const allUsers = require("../controller/allUsers.js");
const updateUser = require("../controller/updateUser.js");
const uploadProductController = require("../controller/uploadProduct.js");
const getProductController = require("../controller/getProduct.js");
const updateProductController = require("../controller/updateProduct.js");

router.post("/signup", userSignUpController);
router.post("/signin", userSignInController);
router.get("/user-details", authToken, userDetailsController);
router.get("/userLogout", userLogout);

router.get("/all-user", authToken, allUsers);
router.post("/update-user", authToken, updateUser);
router.post("/upload-product", authToken, uploadProductController);
router.get("/get-product", getProductController);
router.post("/update-product", authToken, updateProductController);

module.exports = router;
