const Joi = require("joi");

// Define General Information Schema
const generalInformationSchema = Joi.object({
  full_address: Joi.string().required(),
  overall_project_period: Joi.string().required(),
  overall_project_budget: Joi.number().required(),
  project_coordinators: Joi.array()
    .items(
      Joi.object({
        agree: Joi.boolean().default(false),
        date: Joi.date().default(Date.now),
        comment: Joi.string().allow(null).default(null),
      }) // coordinators agree and ref shall be added on the same day
    )
    .required(),
  provincial_superior: Joi.object({
    agree: Joi.boolean().default(false),
    date: Joi.date().default(Date.now),
    comment: Joi.string().allow(null).default(null),
  }),
  project_incharge: Joi.object({
    agree: Joi.boolean().default(false),
    date: Joi.date().default(Date.now),
  }),
});

// Define Beneficiary Schema
const beneficiarySchema = Joi.object({
  name: Joi.string().required(),
  caste: Joi.string().required(),
  occupation_of_parents: Joi.string().required(),
  family_background_and_need_of_support: Joi.string().required(),
  class_of_study_or_name_of_institution: Joi.string().required(),
  eligibility_of_scholarship_and_expected_amount: Joi.string().required(),
  contribution_from_family: Joi.string().required(),
});

// Define Objective Schema
const objectiveSchema = Joi.object({
  objective: Joi.string().required(),
  results_and_outcomes: Joi.array().items(Joi.string()),
  activities: Joi.array().items(
    Joi.object({
      activity: Joi.string().required(),
      months: Joi.array().items(
        Joi.boolean()
      ).length(12),
      means_of_verification: Joi.string().required(),
    })
  ),
});

// Define Project Summary Schema
const projectSummarySchema = Joi.object({
  project_location_geographical_area: Joi.string().required(),
  work_of_sisters_of_st_anns_in_the_project_area: Joi.string(),
  general_socio_economic_conditions_of_the_beneficiaries: Joi.string(),
  problems_identified_and_consequences: Joi.string(),
  need_of_the_project: Joi.string(),
  identification_of_the_beneficiaries: Joi.array().items(
    Joi.object({
      name: Joi.string().required(),
      caste: Joi.string().required(),
      occupation_of_parents: Joi.string().required(),
      family_background_and_need_of_support: Joi.string().required(),
      class_of_study_or_name_of_institution: Joi.string().required(),
      eligibility_of_scholarship_and_expected_amount: Joi.string().required(),
      contribution_from_family: Joi.string().required(),
    })
  ),
  target_group: Joi.string().required(),
  solution_analysis_logical_framework: Joi.object({
    goal: Joi.string().required(),
    objectives: Joi.array().items(
      Joi.object({
        objective: Joi.string().required(),
        results_and_outcomes: Joi.string(),
        activities: Joi.array().items(
          Joi.object({
            activity: Joi.string().required(),
            months: Joi.array().items(Joi.number().integer().min(1).max(12)),
            means_of_verification: Joi.string().required(),
          })
        ),
      })
    ),
  }),
  sustainability: Joi.string(),
  monitoring_process_of_the_project: Joi.string(),
  mode_of_evaluation: Joi.string(),
  budget: Joi.object({
    expenses: Joi.array().items(
      Joi.object({
        description: Joi.string().required(),
        costs: Joi.number().required(),
      })
    ),
    total: Joi.number().default(0),
  }),
});

// Define Expenses Schema
const expensesSchema = Joi.object({
  description: Joi.string().required(),
  costs: Joi.number().required(),
});

// Define Educational Group Support Schema
const educationalGroupSupportSchema = Joi.object({
  project_number: Joi.string(),
  project_title: Joi.string().required(),
  general_information: generalInformationSchema,
  beneficiaries: Joi.array().items(beneficiarySchema),
  objectives: Joi.array().items(objectiveSchema),
  project_summary: projectSummarySchema,
  expenses: expensesSchema,
});

module.exports = educationalGroupSupportSchema;
