// this time find all where applicant is the applicant

const getAllHIVApplicant = async (req, res) => {
  try {
    // validitiy of user will be checked from the token itself
    // you have to querry by project_in_charge.ref

    const applicantId = req.user._id;

    // find by applicant
    const allHIVProject = await welfareHomeChildrenModel.find({
      "mailing_details.project_in_charge.ref": applicantId,
    });
    //   .populate(mailing_details.project_in_charge.ref);
    // I am not sure if populating is required , if it will be I'll put it there

    if (!allHIVProject) {
      return res.status(400).json({
        status: false,
        message: `Unable to fetch any projects for the applicant`,
      });
    }
    return res.status(200).json({
      status: true,
      message: "successfully got all applicants",
      data: res,
    });
  } catch (error) {
    return res.status(400).json({
      success: false,
      message: "Cannot fetch any applicants",
      error: error.message,
    });
  }
};

module.exports = getAllHIVApplicant;