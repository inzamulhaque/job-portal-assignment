const express = require("express");
const { createNewJob } = require("../controllers/job.controller");
const verifyToken = require("../middleware/verifyToken");
const auth = require("../middleware/auth");
const router = express.Router();

router.post(
  "/",
  verifyToken,
  (req, res, next) => auth(req, res, next, "hiring-manager"),
  createNewJob
);

module.exports = router;
