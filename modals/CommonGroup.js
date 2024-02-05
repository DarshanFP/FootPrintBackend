const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const objectiveSchema = new Schema({
  objective: { type: String, required: true },
  results: [{ type: String, required: true }],
  activities: [
    {
      activity: { type: String, required: true },
      timeframe: [{ type: Boolean, required: true }],
      verification: { type: String, required: true },
    },
  ],
});

const Budget_cost = new Schema({
  budget: { type: Number, required: true },
  cost: { type: Number, required: true },
});

const CommonGroup = new Schema({
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
  goal: { type: String, required: true },
  objectives: [objectiveSchema],
  selectedMonths: [{ type: Number, required: true }],
  isSubmitted: { type: Number, required: true },
  budget_cost_table: [Budget_cost],
  nameOfSociety: { type: String, required: true },
  DateOfSubmission: { type: String, required: true },
  TitleOfProject: { type: String, required: true },
  address: {
    type: String,
    required: true,
  },
  OverallProjectPeriod: { type: Number, required: true },
  OverallProjectBudget: { type: Number, required: true },
  ProjectArea: { type: String, required: true },
  directBeneficiaries: { type: Number, required: true },
  indirectBeneficiaries: { type: Number, required: true },
  problemAnalysis: { type: Number, required: true },
  solutionAnalysis: { type: Number, required: true },
  sustainability: { type: Number, required: true },
  monitoringProcess: { type: Number, required: true },
  evaluationMethodology: { type: Number, required: true },
  beneficiaryAgreement: { type: Boolean, required: true },
  beneficiaryAgreementDate: { type: Date, default: Date.now(), required: true },
  project_coordinator: [{
    comment: {type: String , default: null}
    ,ref: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Approver',
    },
    agree: { type: Boolean, default: false },
    date: {
      type: Date,
      default: Date.now(),
    },
  }],
  project_in_charge_agree: {
    agree: { type: Boolean, default: false },
    date: {
      type: Date,
      default: Date.now(),
    },
  },
  provincial_superior_agree: {
    agree: { type: Boolean, default: false },
    date: {
      type: Date,
      default: Date.now(),
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
module.exports = mongoose.model("CG", CommonGroup);
