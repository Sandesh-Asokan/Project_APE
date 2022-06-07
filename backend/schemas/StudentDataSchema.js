const mongoose = require("mongoose");

const assesDetailsSchema = new mongoose.Schema({
  sub: "CGM Weekly assesment",
  task: "Weekly assesment",
  date: 10,
  qna: [qnaSchema],
});

const qnaSchema = new mongoose.Schema({
  id: Number,
  ques: String,
  ans: [String],
});

const submitAssesTemplate = new mongoose.Schema({
  user: String,
  date: Date,
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

module.exports = mongoose.model("student-data", submitAssesTemplate);
