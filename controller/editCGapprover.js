const CG = require("../modals/CommonGroup");

const editCGapprover = async (req, res) => {
  try {
    const {
      projectID,
      comment_box_project_coordinator,
      project_coordinator_agree,
    } = req.body;
    if (
      !projectID ||
      !comment_box_project_coordinator ||
      project_coordinator_agree === undefined
    ) {
      return res.json({ success: false, msg: "send all fields" });
    }

    const editedCG = await CG.findByIdAndUpdate(
      projectID,
      {
        $push: {
          project_coordinators: {
            agree: project_coordinator_agree,
            comment: comment_box_project_coordinator,
            date: Date.now(),
            ref: req.user._id,
          },
        },
      },
      { new: true }
    );

    if (!editedCG) {
      return res.json({ success: false, msg: "updation failed" });
    }
    return res.json({ success: true, data: editedCG });
  } catch (error) {
    console.log(error);
    res.json({ success: false });
  }
};
module.exports = editCGapprover;
