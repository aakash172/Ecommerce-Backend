const express = require("express");

const router = express.Router();

const userSignUpController = require("../controller/user/userSignUp.js");
const userSignInController = require("../controller/user/userSignIn.js");
const authToken = require("../middleware/authToken.js");
const userDetailsController = require("../controller/user/userDetails.js");
const userLogout = require("../controller/user/userLogout.js");
const allUsers = require("../controller/user/allUsers.js");
const updateUser = require("../controller/user/updateUser.js");
const uploadProductController = require("../controller/product/uploadProduct.js");
const getProductController = require("../controller/product/getProduct.js");
const updateProductController = require("../controller/product/updateProduct.js");
const getCategoryProduct = require("../controller/product/getCategoryProduct.js");

router.post("/signup", userSignUpController);
router.post("/signin", userSignInController);
router.get("/user-details", authToken, userDetailsController);
router.get("/userLogout", userLogout);

router.get("/all-user", authToken, allUsers);
router.post("/update-user", authToken, updateUser);
router.post("/upload-product", authToken, uploadProductController);
router.get("/get-product", getProductController);
router.post("/update-product", authToken, updateProductController);

router.get("/get-categoryProduct", getCategoryProduct);

module.exports = router;
