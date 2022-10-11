const Job = require("../models/Job");
const User = require("../models/User");

const createJobServices = async (data) => {
  const createrId = data.createdBy.id;
  const job = await Job.create(data);
  await User.findOneAndUpdate(
    { _id: createrId },
    { $push: { createdJobs: job._id } }
  );
  return job;
};

const updateJobServices = async (id, data) => {
  const job = await Job.findOneAndUpdate({ _id: id }, data);
  return job;
};

module.exports = { createJobServices, updateJobServices };
