const express = require("express");
const {
  createNewJob,
  updateJobById,
  getAllJobs,
  getJobById,
} = require("../controllers/job.controller");
const verifyToken = require("../middleware/verifyToken");
const auth = require("../middleware/auth");
const router = express.Router();

router.get("/", verifyToken, getAllJobs);

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

router.get("/:id", verifyToken, getJobById);

module.exports = router;
