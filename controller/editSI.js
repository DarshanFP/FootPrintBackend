const SI= require("../modals/SocialIndividual");
const SocialIndividualValidate = require("./SocialIndividualValidate");

const editSI=async (req,res)=>{
    try {
        const { projectID, ...restOfReqBody } = req.body;
    const modifiedReqBody = { ...restOfReqBody };
    if (!projectID) {
        res.json({ success: false, msg: "send project ID" });
      }
      try {
        await SocialIndividualValidate.validateAsync(modifiedReqBody);
      } catch (error) {
        console.log(error);
        return res.status(400).json({ success: false, message: error.message });
      }
      const editedSI =await SI.findOneAndUpdate(
        { project_code: projectID },
        {
            nameOfSelfEmployment: req.body.nameOfSelfEmployment,
            photograph_benificary: req.body.photograph_benificary,
            name: req.body.name,
            mobile: req.body.mobile,
            email: req.body.email,
            address: req.body.address,
            aadhar_no: req.body.aadhar_no,
            gender: req.body.gender,
            DOB: req.body.DOB,
            married: req.body.married,
            spouse_name: req.body.spouse_name,
            no_of_children: req.body.no_of_children,
            education_status: req.body.education_status,
            religion: req.body.religion,
            caste:req.body.caste,
            present_family_situation: req.body.present_family_situation,
            smallScaleBusinessDetails: req.body.smallScaleBusinessDetails,
            monthlyEarnings: req.body.monthlyEarnings,
            businessIdeaDetails: req.body.businessIdeaDetails,
            businessStrengthsPreviousYear: req.body.businessStrengthsPreviousYear,
            businessWeaknessesPreviousYear: req.body.businessWeaknessesPreviousYear,
            riskIdentification: req.body.riskIdentification,
            businessSustainability: req.body.businessSustainability,
            expectedBenefits: req.body.expectedBenefits,
            budget_cost_table: req.body.budget_cost_table,
            aadhar_img: req.body.aadhar_img,
            request_letter_img: req.body.request_letter_img,
            quotations_regarding_the_purchase_img: req.body.quotations_regarding_the_purchase_img,
            other_supporting_documents: req.body.other_supporting_documents,
            benificary_agree: req.body.benificary_agree,
            project_in_charge_agree: Joi.object().keys({
              agree: Joi.boolean().default(false),
              date: Joi.date().default(Date.now),
            }),
        },
        { new: true }
      );

      if (!editedSI) {
        return res.json({ success: false, msg: "updation failed" });
      }
      return res.json({ success: true, data: editedSI });

    } catch (error) {
        console.log(error);
        res.json({ success: false });
    }
}
module.exports=editSI