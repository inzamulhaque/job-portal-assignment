const express = require("express");
const {
  signupUser,
  verifyUser,
  loginUser,
} = require("../controllers/user.controller");
const router = express.Router();

router.post("/signup", signupUser);
router.get("/signup/confirmation/:token", verifyUser);
router.get("/login", loginUser);

module.exports = router;
