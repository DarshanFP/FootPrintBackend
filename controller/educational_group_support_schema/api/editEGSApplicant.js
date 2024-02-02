const EducationalGroupSupportModel = require("../../../modals/EducationalGroupSupportModel");
const educationalGroupSupportSchema = require("../validation/educationalGroupSupportSchema");

const createEGS = async (req, res) => {
  try {
    // first evaluate req body
    // request body contains your required data
    // use of the json middleware makes the request body a json object

    // validate request body
    try {
      await educationalGroupSupportSchema.validateAsync(req.body);
    } catch (error) {
      return res.status(400).json({
        message: "Error validating, please check the fields",
        error: error.message,
        success: false,
      });
    }

    // We are using JWT auth tokens
    // Those token integrate the current users in the request
    // so we extract those user data from the request
    // vallidation successfull => all the fields are there

    // extract all the fields for use
    const {
      project_number,
    } = req.body;

    // you have the fields that were sent in the request body
    // const project_number

    // ^ -- start $ end
    // ^ from start match these symbols

    await EducationalGroupSupportModel.findAndUpdate(
      { project_number },
      req.body
    );

    return res.status(200).json({
      success: true,
      message: "Successful submission of form",
    });
  } catch (error) {
    return res.status(400).json({
      success: false,
      error: error.message,
      message: `Unexpected error submitting the form`,
    });
  }
};

module.exports = createEGS;
