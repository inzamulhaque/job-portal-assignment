const { getAllCandidatesServices } = require("../services/admin.services");

const getAllCandidates = async (req, res) => {
  try {
    const candidates = await getAllCandidatesServices();

    if (!candidates) {
      return res.status(500).json({
        status: "fail",
        message: "Couldn't get All Candidates",
      });
    }

    res.status(200).json({
      status: "success",
      candidates,
    });
  } catch (error) {
    res.status(500).json({
      status: "fail",
      message: "Couldn't get All Candidates",
      error: error.message,
    });
  }
};

module.exports = { getAllCandidates };
