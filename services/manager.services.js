const Job = require("../models/Job");

const getAllJobsServices = async (email) => {
  return await Job.find({ "createdBy.email": email });
};

const getJobByIdServices = async (email, id) => {
  return await Job.findOne({ _id: id, "createdBy.email": email })
    .populate("appliedBy.id")
    .populate("appliedBy.applicationId");
};

module.exports = { getAllJobsServices, getJobByIdServices };
