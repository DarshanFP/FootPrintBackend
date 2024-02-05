const Joi = require('joi');

const activitySchema = Joi.object({
  activity: Joi.string().required(),
  timeframe: Joi.array().items(Joi.boolean().required()).required(),
  verification: Joi.string().required(),
});

const objectiveSchema = Joi.object({
  objective: Joi.string().required(),
  results: Joi.array().items(Joi.string().required()).required(),
  activities: Joi.array().items(activitySchema).required(),
});

const budgetCostSchema = Joi.object({
  budget: Joi.number().required(),
  cost: Joi.number().required(),
});

const commonGroupValidate = Joi.object({
  goal: Joi.string().required(),
  objectives: Joi.array().items(objectiveSchema).required(),
  selectedMonths: Joi.array().items(Joi.number().required()).required(),
  isSubmitted: Joi.number().required(),
  budget_cost_table: Joi.array().items(budgetCostSchema),
  nameOfSociety: Joi.string().required(),
  DateOfSubmission: Joi.string().required(),
  TitleOfProject: Joi.string().required(),
  address: Joi.string().required(),
  OverallProjectPeriod: Joi.number().required(),
  OverallProjectBudget: Joi.number().required(),
  ProjectArea: Joi.string().required(),
  directBeneficiaries: Joi.number().required(),
  indirectBeneficiaries: Joi.number().required(),
  problemAnalysis: Joi.number().required(),
  solutionAnalysis: Joi.number().required(),
  sustainability: Joi.number().required(),
  monitoringProcess: Joi.number().required(),
  evaluationMethodology: Joi.number().required(),
  beneficiaryAgreement: Joi.boolean().required(),
  beneficiaryAgreementDate: Joi.date().default(Date.now()).required(),
  project_in_charge_agree: Joi.object({
    agree: Joi.boolean().default(false),
    date: Joi.date().default(Date.now()),
  }),
  
});

module.exports = commonGroupValidate;