const { request } = require("express");
const userController = require("../controller/users.controller");

const express = require("express");
const router = express.Router();

router.post("/register", userController.register);
router.post("/login", userController.login);
router.post("/user-profile", userController.userProfile);

module.exports = router;
