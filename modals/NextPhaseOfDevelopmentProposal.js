const mongoose = require("mongoose");

const nextPhaseOfDevelopmentSchema = new mongoose.Schema(
  {
    phase: {
      type: String,
      required: true,
    },
    project_Number: {
      type: String,
      required: true,
    },
    society_name: {
      type: String,
      required: true, // Required field
    },
    project_title: {
      type: String,
      required: true, // Required field
    },
    project_highlights: {
      type: String,
      required: true, // Required field
    },
    present_project_year: {
      type: String,
      required: true, // Required field
    },
    key_data_of_project: {
      project_area: String,
      sister_in_charge: String,
      overall_project_budget: String,
      own_contribution: {
        total_budget: {
          type: Number,
          default: 0,
        },
        budget_spent_previous_phases: [
          {
            phase: {
              type: String,
              required: true,
            },
            budget: {
              type: Number,
              required: true,
            },
          },
        ],
        budget_allocated_next_phase: {
          type: Number,
          required: true,
        },
      },
    },
    mailing_list: {
      project_in_charge: {
        ref: mongoose.Schema.Types.ObjectId,
        agree: Boolean, // Agreement field
        date: Date, // Date of agreement field
      },
      provincial_superior: {
        ref: mongoose.Schema.Types.ObjectId,
        agree: Boolean, // Agreement field
        date: Date, // Date of agreement field
        comment_box_provincial_superior: String, // Comment box for provincial superior
      },
      project_coordinators: [
        {
          ref: mongoose.Schema.Types.ObjectId,
          agree: Boolean, // Agreement field
          date: Date, // Date of agreement field
          comment_box_project_coordinator: String, // Comment box for project coordinator
        },
      ],
    },
    goal_and_objectives: {
      project_goal: {
        type: String,
        required: true, // Required field
      },
      objectives_previous: [String],
      project_area: String,
      overall_goal: String,
      objectives: [
        {
          results_outcome_previous_phases: String,
          activities_next_phase: [
            {
              activity: {
                type: String,
                required: true, // Required field
              },
              timetable: {
                period: {
                  type: String,
                  enum: ["Daily", "Weekly", "Monthly", "Quarterly", "Annually"],
                },
                schedule: String,
                incharge: String,
              },
            },
          ],
        },
      ],
    },
    beneficiaries_and_contribution: [
      {
        beneficiary_name: {
          type: String,
          required: true,
        },
        contribution: {
          type: Number,
          required: true,
        },
      },
    ],
    monitoring_reporting_evaluation: {
      type: String,
      required: true, // Required field
    },
    budget: [
      {
        description_of_expense: { type: String, required: true }, // Required field
        cost_last_year: {
          type: Number,
          required: true,
        },
        budget_current_year: {
          type: Number,
          required: true,
        },
      },
    ],
    conclusion: {
      type: String,
      required: true, // Required field
    },
    amount_approved: {
      type: Number,
      default: 0, // Required field
    },
  },
  { timestamps: true }
);

nextPhaseOfDevelopmentSchema.index({ project_number: -1 });

module.exports = mongoose.model(
  "next_phase_of_development_proposal",
  nextPhaseOfDevelopmentSchema
);