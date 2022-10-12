const express = require("express");
const verifyToken = require("../middleware/verifyToken");
const auth = require("../middleware/auth");
const { getAllCandidates } = require("../controllers/admin.controller");
const router = express.Router();

router.get(
  "/candidates",
  verifyToken,
  (req, res, next) => auth(req, res, next, "admin"),
  getAllCandidates
);

module.exports = router;
