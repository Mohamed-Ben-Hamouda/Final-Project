const mongoose = require("mongoose");

const CovidTestSchema = mongoose.Schema({
  patient: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "patient",
  },

  testName: {
    type: String,
    required: true,
  },
  dateTest: {
    type: String,
    required: true,
  },
  resultat: {
    type: String,
    required: true,
  },
  date: {
    type: Date,
    default: Date.now,
  },
});
module.exports = mongoose.model("covidTest", CovidTestSchema);
