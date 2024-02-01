const EducationalGroupSupportModel = require("../../../modals/EducationalGroupSupportModel");

const editEGSReviwer = async (req, res) => {
  // put type route
  try {
    const reviewerData = req.user; // reviewer

    const { comment, agree, project_number } = req.body;

    const res = await EducationalGroupSupportModel.findOneAndUpdate({
      project_number,
    } , {
        'general_information.provincial_superior.agree' : agree , 
        'general_information.provincial_superior.comment' : comment,
    });
  } catch (e) {}
};
