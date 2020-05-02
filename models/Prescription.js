const mongoose = require("mongoose");

const PrescriptionSchema = mongoose.Schema({
  patient: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "patient",
  },
  personel: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "personel",
  },
  date: {
    type: Date,
    required: true,
  },
  traitement: {
    type: Array,
    default: [],
  },
  date: {
    type: Date,
    default: Date.now,
  },
});
module.exports = mongoose.model("prescription", PrescriptionSchema);
