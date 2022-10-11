const {
  createJobServices,
  updateJobServices,
} = require("../services/job.services");

const createNewJob = async (req, res, next) => {
  try {
    const job = await createJobServices(req.body);

    if (!job) {
      return res.status(500).json({
        status: "fail",
        message: "Couldn't create job",
        error: error.message,
      });
    }

    res.status(201).json({
      status: "ok",
      message: "successfully created job",
      job,
    });
  } catch (error) {
    res.status(500).json({
      status: "fail",
      message: "Couldn't create job",
      error: error.message,
    });
  }
};

const updateJobById = async (req, res) => {
  try {
    const { id } = req.params;
    const data = req.body;
    const job = await updateJobServices(id, data);
    if (!job) {
      return res.status(400).json({
        status: "fail",
        message: "Couldn't get job with this id",
        error: error.message,
      });
    }

    res.status(201).json({
      status: "ok",
      message: "successfully updated job",
    });
  } catch (error) {
    res.status(400).json({
      status: "fail",
      message: "Couldn't get job with this id",
      error: error.message,
    });
  }
};

module.exports = { createNewJob, updateJobById };
