const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const Budget_cost = new Schema({
  budget: { type: Number, required: true },
  cost: { type: Number, required: true },
});

const SocialIndividual = new Schema({
  project_code: { type: String, required: true, unique: true },
  nameOfSelfEmployment: { type: String, required: true },
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
    type: Number,
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
  married: {
    type: String,
    default: null,
    enum: ["married", "unmarried", "divorced", "spouse dead"],
  },
  spouse_name: {
    type: String,
    default: null,
  },
  no_of_children: {
    type: Number,
    default: 0,
  },
  education_status: {
    type: String,
    default: null,
  },
  religion: {
    type: String,
    required: true,
  },
  caste: {
    type: String,
    required: true,
  },
  present_family_situation: {
    type: String,
    required: true,
  },
  smallScaleBusinessDetails: {
    type: String,
    required: true,
  },
  monthlyEarnings: {
    type: Number,
    required: true,
  },
  businessIdeaDetails: {
    type: String,
    required: true,
  },
  //   revenueGoals:
  businessStrengthsPreviousYear: {
    type: String,
    required: true,
  },
  businessWeaknessesPreviousYear: {
    type: String,
    required: true,
  },
  riskIdentification: {
    type: String,
    required: true,
  },
  businessSustainability: {
    type: String,
    required: true,
  },
  expectedBenefits: {
    type: String,
    required: true,
  },
  budget_cost_table: [Budget_cost],
  aadhar_img: {
    type: String,
    required: true,
  },
  request_letter_img: {
    type: String,
    required: true,
  },
  quotations_regarding_the_purchase_img: {
    type: String,
    required: true,
  },
  other_supporting_documents: {
    type: String,
    required: true,
  },
  benificary_agree: {
    agree: { type: Boolean, dafault: false },
    date: {
      type: Date,
      default: Date.now,
    },
  },
  // agree_syntax_changed
  project_coordinator_agree: {
    agree: { type: Boolean, default: false },
    date: {
      type: Date,
      default: Date.now,
    },
  },
  // agree_sytanx_changed
  project_in_charge_agree: {
    agree: { type: Boolean, default: false },
    date: {
      type: Date,
      default: Date.now,
    },
  },
  //agree_syntax_changed
  provincial_superior_agree: {
    agree: { type: Boolean, default: false },
    date: {
      type: Date,
      default: Date.now,
    },
  },
  comment_box_provincial_superior: {
    type: String,
    default: null,
  },
  comment_box_project_coordinator: {
    type: String,
    default: null,
  },
});
module.exports = mongoose.model("SI", SocialIndividual);
