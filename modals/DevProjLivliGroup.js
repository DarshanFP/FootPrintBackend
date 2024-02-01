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


const Studies=new Schema({
  serialNo:{type: String, required: true},
  name:{type: String, required: true},
  family_situation:{type: String, required: true},
  nature_livlihood:{type: String, required: true},
  requested_amount:{type:Number, required:true}
})


const DevProjLivliGroup=new Schema({
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
  NameOfSociety:{type:String, required:true},
  DateOfSubmission:{type:String, required:true},
  TitleOfProject:{type:String, required:true},
  address: {
    type: String,
    required: true,
  },
  OverallProjectPeriod:{type:Number, required:true},
  OverallProjectBudget:{type:Number, required:true},
  ProjectOfInitialProject:{type:String, required:true},
  problemAnalysis:{type:String, required:true},
  solutionAnalysis:{type:String, required:true},
  goal:{type:String, required:true},
  objectives:[objectiveSchema],
  sustainability:{type:String, required:true},
  monitoringProcess:{type:String, required:true},
  budget_cost_table: [Budget_cost],
  studies_table_data:[Studies],
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


})
module.exports=mongoose.model("DPLG", DevProjLivliGroup);