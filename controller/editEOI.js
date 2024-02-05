const EOI = require("../modals/EducationOngoingIndividual");
const EducationOngoingIndividualValidate = require("../controller/EducationOngoingIndividualValidate");
const editEOI = async (req, res) => {
    try {
      const { projectID, ...restOfReqBody } = req.body;
    const modifiedReqBody = { ...restOfReqBody };

      if (!projectID) {
        res.json({ success: false, msg: "send project ID" });
      }
      try {
        await EducationOngoingIndividualValidate.validateAsync(modifiedReqBody);
      } catch (error) {
        console.log(error);
        return res.status(400).json({ success: false, message: error.message });
      }
      const editedEOI =await EOI.findOneAndUpdate(
        { project_code: projectID },
        {
            health_status_of_father_others:req.body.health_status_of_father_others,
            health_status_of_mother_others,
            residential_status_others,
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
            monthly_income_of_mother,
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
            project_in_charge_agree,
            present_study,
            details_of_budget,
            total_cost_of_study,
            scholarship_expected,
            beneficiaries_contribution,
            total_scholarship_contribution,
            balance_amount_requested,
        },
        { new: true }
      );
      if (!editedEOI) {
        return res.json({ success: false, msg: "updation failed" });
      }
      return res.json({ success: true, data: editedEOI });
    } catch (error) {
      console.log(error);
      res.json({ success: false });
    }
  };
  module.exports = editEOI;