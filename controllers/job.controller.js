const { createJobServices } = require("../services/job.services");

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

module.exports = { createNewJob };
