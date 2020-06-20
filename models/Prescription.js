const mongoose = require("mongoose");

const PrescriptionSchema = mongoose.Schema({
  patient: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "patient",
  },
  medecin: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "infermier",
  },
  datePrescription: {
    type: String,
    required: true,
  },
  traitement: {
    type: String,
    required: true
  },

  date: {
    type: Date,
    default: Date.now,
  },
});
module.exports = mongoose.model("prescription", PrescriptionSchema);
