const Job = require("../models/Job");

const createJobServices = async (data) => {
  return await Job.create(data);
};

module.exports = { createJobServices };
