const HOI = require("../modals/HealthOngoingIndividual");

const editHOIreviewer = async (req, res) => {
  try {
    const {
      projectID,
      comment_box_provincial_superior,
      provincial_superior_agree,
    } = req.body;
    if (
      !projectID ||
      !comment_box_provincial_superior ||
      provincial_superior_agree === undefined
    ) {
      return res.json({ success: false, msg: "send all fields" });
    }

    const editedHOI = await HOI.findByIdAndUpdate(
      projectID,
      {
        comment_box_provisional_superior: comment_box_provincial_superior,
        provincial_superior_agree: provincial_superior_agree,
      },
      { new: true }
    );

    if (!editedHOI) {
      return res.json({ success: false, msg: "No such project" });
    }
    return res.json({ success: true, data: editedHOI });
  } catch (error) {
    console.log(error);
    res.json({ success: false });
  }
};
module.exports = editHOIreviewer;
