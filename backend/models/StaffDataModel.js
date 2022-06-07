const mongoose = require("mongoose");

const postAssesTemplate = new mongoose.Schema({
  assesName: String,
  assesDue: String,
  //   qna: [
  //     {
  //       id: 1,
  //       ques: "",
  //       words: "",
  //     },
  //   ],

  //   username: {
  //     type: String,
  //     required: true,
  //   },
  //   email: {
  //     type: String,
  //     required: true,
  //   },
  //   password: {
  //     type: String,
  //     required: true,
  //   },
  //   date: {
  //     type: Date,
  //     default: Date.now,
  //   },
});

module.exports = mongoose.model("staff-data", postAssesTemplate);
