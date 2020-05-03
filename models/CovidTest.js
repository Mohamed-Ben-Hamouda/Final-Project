const mongoose = require("mongoose");

const CovidTestSchema = mongoose.Schema({
  patient: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "patient",
  },
  personel: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "patient",
  },
  testName: {
    type: String,
    required: true,
  },
  dateTest: {
    type: Date,
    required: true,
  },
  resultat: {
    type: Boolean,
    required: true,
  },
  date: {
    type: Date,
    default: Date.now,
  },
});
module.exports = mongoose.model("covidTest", CovidTestSchema);
