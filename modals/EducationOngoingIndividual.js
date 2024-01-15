const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const EducationOngoingIndividual = new Schema({
  project_code: { type: String, required: true, unique: true },
  applicant: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Applicant",
    required: true,
  },
  reviewer: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Reviewer",
    required: true,
  },
  photograph_benificary: {
    type: String,
    required: true,
  },
  name: {
    type: String,
    required: true,
  },
  mobile: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },

  address: {
    type: String,
    required: true,
  },
  aadhar_no: {
    type: Number,
    required: true,
  },
  gender: {
    type: String,
    required: true,
    enum: ["male", "female"],
  },
  DOB: {
    type: String,
    required: true,
  },
  father: {
    type: String,
    required: true,
  },
  mother: {
    type: String,
    required: true,
  },
  mother_tongue: {
    type: String,
    required: true,
  },
  religion: {
    type: String,
    required: true,
  },
  caste: {
    type: String,
    required: true,
  },
  occupation_of_father: {
    type: String,
    required: true,
  },
  monthly_income_of_father: {
    type: Number,
    required: true,
  },
  occupation_of_mother: {
    type: String,
    required: true,
  },
  motherIs: {
    type: String,
    required: true,
    enum: ["healthy", "sick", "dead"],
  },
  fatherIs: {
    type: String,
    required: true,
    enum: ["healthy", "sick", "dead", "deserted the family"],
  },
  grandmother_support: {
    type: String,
    required: true,
    enum: ["Yes", "No", "Died"],
  },
  grandfather_support: {
    type: String,
    required: true,
    enum: ["Yes", "No", "Died"],
  },
  health_status_of_father: {
    type: String,
    required: true,
    enum: [
      "Chronically Sick",
      "HIV/AIDS positive",
      "Disabled",
      "Alcoholic",
      "Others",
    ],
  },
  health_status_of_mother: {
    type: String,
    required: true,
    enum: [
      "Chronically Sick",
      "HIV/AIDS positive",
      "Disabled",
      "Alcoholic",
      "Others",
    ],
  },
  residential_status: {
    type: String,
    required: true,
    enum: ["house owner", "land owner", "rented house", "others"],
  },
  family_situation_of_the_beneficiary: {
    type: String,
    required: true,
  },
  extra_curricular_activities_participated: {
    type: String,
    required: true,
  },
  nature_of_personality_growth_visible: {
    type: String,
    required: true,
  },
  Scholarship_received_from_government: {
    type: Number,
    required: true,
  },
  expenses_from_family_of_the_beneficiary: {
    type: Number,
    required: true,
  },
  other_support_received_from_other_sources: {
    type: Number,
    required: true,
  },
  total_amount: {
    type: Number,
    required: true,
  },
  amount_spent_from_project: {
    type: Number,
    required: true,
  },
  total_amount_already_spent_on_the_studies: {
    type: Number,
    required: true,
  },
  balance_amount_retained_in_the_projects: {
    type: Number,
    required: true,
  },
  aadhar_img: {
    type: String,
    required: true,
  },
  fee_quotation_from_the_institution_img: {
    type: String,
    required: true,
  },
  proof_of_scholarship_received_from_government_img: {
    type: String,
    required: true,
  },
  medical_confirmation_img: {
    type: String,
    required: true,
  },
  caste_certificate_img: {
    type: String,
    required: true,
  },
  affidavit_proof_img: {
    type: String,
    required: true,
  },
  request_letter_img: {
    type: String,
    required: true,
  },
  death_certificate_img: {
    type: String,
    required: true,
  },
  mark_list_of_previous_year: {
    type: String,
    required: true,
  },
  benificary_agree: {
    type: Boolean,
    dafault: false,
    date: Date,
  },
  project_coordinator_agree: {
    type: Boolean,
    default: false,
    date: Date,
  },
  provincial_in_charge_agree: {
    type: Boolean,
    default: false,
    date: Date,
  },
  provincial_superior_agree: {
    type: Boolean,
    default: false,
    date: Date,
  },
  comment_box_provisional_superior: {
    type: String,
    default: null,
    date: Date,
  },
  comment_box_provisional_coordinator: {
    type: String,
    default: null,
    date: Date,
  },
  amount_approved_project_coordinator: {
    type: Number,
    default: 0,
  },
});
module.exports = mongoose.model("EOI", EducationOngoingIndividual);
