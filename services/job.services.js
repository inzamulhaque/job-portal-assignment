const Job = require("../models/Job");
const User = require("../models/User");

const getAllJobsServices = async (filters, queries) => {
  const jobs = await Job.find(filters).sort(queries.sortBy);
  return jobs;
};

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

const getJobByIdServices = async (id) => {
  return await Job.findById(id).populate("createdBy.id");
};

module.exports = {
  createJobServices,
  updateJobServices,
  getAllJobsServices,
  getJobByIdServices,
};
