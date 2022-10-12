const User = require("../models/User");

const getAllCandidatesServices = async () => {
  const candidates = await User.find({ role: "candidate" });
  return candidates;
};

module.exports = { getAllCandidatesServices };
