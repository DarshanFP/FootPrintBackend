const ISG = require("../modals/InstitutionSkillGroup");

const editISGapprover = async (req, res) => {
  try {
    const {
      projectID,
      comment_box_project_coordinator,
      project_coordinator_agree,
    } = req.body;
    if (
      !projectID ||
      !comment_box_project_coordinator||
      project_coordinator_agree === undefined
    ) {
      return res.json({ success: false, msg: "send all fields" });
    }

    const editedISG = await ISG.findByIdAndUpdate(
      projectID,
      {
        comment_box_project_coordinator: comment_box_project_coordinator,
        project_coordinator_agree: project_coordinator_agree,
      },
      { new: true }
    );


    if (!editedISG) {
      return res.json({ success: false, msg: "updation failed" });
    }
    return res.json({ success: true, data: editedISG });
  } catch (error) {
    console.log(error);
    res.json({ success: false });
  }
};
module.exports = editISGapprover;
