// this time find all where applicant is the applicant

const NextPhaseOfDevelopmentProposal = require("../../../modals/NextPhaseOfDevelopmentProposal");

const getAllWHFCReviwer = async (req, res) => {
  try {
    // validitiy of user will be checked from the token itself
    // you have to querry by project_in_charge.ref

    const reviewerId = req.user;

    // find by applicant
    const allNPDP = await NextPhaseOfDevelopmentProposal
      .find({
        "mailing_details.provincial_superior.ref": reviewerId,
      })
      .populate({
        path: mailing_details.project_in_charge.ref,
        select: "name email mobile",
      });

    if (!allNPDP) {
      return res.status(400).json({
        status: false,
        message: `Unable to fetch any projects for the reviewer`,
      });
    }
    return res.status(200).json({
      status: true,
      message: "successfully got all projects",
      data: res,
    });
  } catch (error) {
    return res.status(400).json({
      success: false,
      message: "Cannot fetch any projects",
      error: error.message,
    });
  }
};

module.exports = getAllNPDPReviwer;