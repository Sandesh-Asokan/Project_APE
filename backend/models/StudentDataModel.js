const mongoose = require("mongoose");

const qnaSchema = new mongoose.Schema({
  id: Number,
  ques: String,
  ans: String,
});
const assesDetailsSchema = new mongoose.Schema({
  assesName: String,
  // task: String,
  assesDue: Date,
  qna: [qnaSchema],
});

const submitAssesTemplate = new mongoose.Schema({
  user: String,
  date: Date,
  marks: [Number],
  total: Number,
  data: [assesDetailsSchema],
  // {
  //   sub: "CGM Weekly assesment",
  //   task: "Weekly assesment",
  //   date: 10,
  //   qna: [
  //     { id: 1, ques: "How would this project help us?", ans: [] },
  //     { id: 2, ques: "What is purpose of APE project?", ans: [] },
  //     { id: 3, ques: "Why Planet earth is rotating?", ans: [] },
  //   ],
  // },
});

module.exports = {
  submitAssesTemplate: mongoose.model("student-data", submitAssesTemplate),
  submitAssesSchema: submitAssesTemplate,
};
