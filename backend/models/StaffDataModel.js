const mongoose = require("mongoose");

const qnaSchema = new mongoose.Schema({
        id: Number,
        ques: String,
        words: String,
      })

const postAssesTemplate = new mongoose.Schema({
  assesName: String,
  assesDue: String,
  qna: [qnaSchema],

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
