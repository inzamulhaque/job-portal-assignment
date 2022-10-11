const express = require("express");
const {
  createNewJob,
  updateJobById,
} = require("../controllers/job.controller");
const verifyToken = require("../middleware/verifyToken");
const auth = require("../middleware/auth");
const router = express.Router();

router.post(
  "/",
  verifyToken,
  (req, res, next) => auth(req, res, next, "hiring-manager"),
  createNewJob
);

router.patch(
  "/:id",
  verifyToken,
  (req, res, next) => auth(req, res, next, "hiring-manager"),
  updateJobById
);

module.exports = router;
