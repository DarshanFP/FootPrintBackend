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

const InstitutionSkillGroup = new Schema({
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
  NameOfSociety: { type: String, required: true },
  DateOfSubmission: { type: String, required: true },
  TitleOfProject:{type:String, required:true},
  address: {
    type: String,
    required: true,
  },
  OverallProjectPeriod:{type:Number, required:true},
  OverallProjectBudget:{type:Number, required:true},
  NumberOfBeneficiaries:{type:Number, required:true},
  ResidentialVillages:{type:String, required:true},
  SelectionCriteriaAndProfile:{type:String, required:true},
  DescriptionOfBeneficiary:{type:String, required:true},
  problemAnalysis:{type:String, required:true},
  solutionAnalysis:{type:String, required:true},
  



});
module.exports = mongoose.model("ISG", InstitutionSkillGroup);
