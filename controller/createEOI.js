const EOI = require("../modals/EducationOngoingIndividual");
const EducationOngoingIndividualValidate = require("../controller/EducationOngoingIndividualValidate");
const createEOI = async (req, res) => {
  try {
    try {
      await EducationOngoingIndividualValidate.validateAsync(req.body);
    } catch (error) {
      return res.status(400).json({ success: false, message: error.message });
    }
    let projectCode = 0;
    const currentDate = new Date();
    const currentYear = currentDate.getFullYear();
    const {
      photograph_benificary,
      name,
      mobile,
      email,
      address,
      aadhar_no,
      gender,
      DOB,
      father,
      mother,
      mother_tongue,
      religion,
      caste,
      occupation_of_father,
      monthly_income_of_father,
      occupation_of_mother,
      motherIs,
      fatherIs,
      grandmother_support,
      grandfather_support,
      health_status_of_father,
      health_status_of_mother,
      residential_status,
      family_situation_of_the_beneficiary,
      extra_curricular_activities_participated,
      nature_of_personality_growth_visible,
      Scholarship_received_from_government,
      expenses_from_family_of_the_beneficiary,
      other_support_received_from_other_sources,
      total_amount,
      amount_spent_from_project,
      total_amount_already_spent_on_the_studies,
      balance_amount_retained_in_the_projects,
      aadhar_img,
      fee_quotation_from_the_institution_img,
      proof_of_scholarship_received_from_government_img,
      medical_confirmation_img,
      caste_certificate_img,
      affidavit_proof_img,
      request_letter_img,
      death_certificate_img,
      mark_list_of_previous_year,
      benificary_agree,
      provincial_in_charge_agree,
    } = req.body;

    const projectExists = await EOI.findOne({ aadhar_no });
    if (projectExists) {
      return res.json({ success: false, msg: "This aadhar number exists" });
    }

    const allEOI = await EOI.find({}, "project_code");

    if (allEOI.length === 0) {
      projectCode = `EI${currentYear}0`;
    } else {
      projectCode = `EI${currentYear}${
        parseInt(allEOI[allEOI.length - 1].project_code.slice(-1)) + 1
      }`;
    }

    await EOI.create({
      project_code: projectCode,
      applicant: req.user,
      reviewer: req.user.reviewer,
      photograph_benificary,
      name,
      email,
      mobile,
      aadhar_no,
      address,
      gender,
      DOB,
      father,
      mother,
      mother_tongue,
      religion,
      caste,
      occupation_of_father,
      monthly_income_of_father,
      occupation_of_mother,
      motherIs,
      fatherIs,
      grandmother_support,
      grandfather_support,
      health_status_of_father,
      health_status_of_mother,
      residential_status,
      family_situation_of_the_beneficiary,
      extra_curricular_activities_participated,
      nature_of_personality_growth_visible,
      Scholarship_received_from_government,
      expenses_from_family_of_the_beneficiary,
      other_support_received_from_other_sources,
      total_amount,
      amount_spent_from_project,
      total_amount_already_spent_on_the_studies,
      balance_amount_retained_in_the_projects,
      aadhar_img,
      fee_quotation_from_the_institution_img,
      proof_of_scholarship_received_from_government_img,
      medical_confirmation_img,
      caste_certificate_img,
      affidavit_proof_img,
      request_letter_img,
      death_certificate_img,
      mark_list_of_previous_year,
      benificary_agree,
      provincial_in_charge_agree,
    });
    res.json({ success: true });
  } catch (error) {
    console.log(error);
    res.json({ success: false });
  }
};
module.exports = createEOI;
