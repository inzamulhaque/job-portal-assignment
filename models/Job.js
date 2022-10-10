const mongoose = require("mongoose");
const { ObjectId } = mongoose.Schema.Types;
const validator = require("validator");
const crypto = require("crypto");

const jobSchema = mongoose.Schema(
  {
    createdBy: {
      name: {
        type: String,
        required: [true, "Please provide a Hiring Manager name"],
      },
      id: {
        id: ObjectId,
        ref: "Users",
        required: [true, "Please provide a Hiring Manager id"],
      },
    },

    jobTitle: {
      type: String,
      required: [true, "Please provide a jobTitle"],
      trim: true,
      minLength: [3, "Name must be at least 3 characters."],
      maxLength: [200, "Name is too large"],
    },

    companyName: {
      type: String,
      required: [true, "Please provide a companyName"],
    },

    salary: {
      type: Number,
      required: [true, "Please provide a salary"],
    },

    jobDescription: String,

    applicationEmailOrLink: {
      type: String,
      required: [true, "Please provide a applicationEmailOrLink"],
      validate: [
        validator.isEmail || validator.isURL,
        "Provide a valid Email or Link",
      ],
    },

    appliedBy: [
      {
        id: ObjectId,
        ref: "Jobs",
      },
    ],

    confirmationToken: String,
    confirmationTokenExpires: Date,
  },
  {
    timestamps: true,
  }
);

const Job = mongoose.model("User", jobSchema);

module.exports = Job;
