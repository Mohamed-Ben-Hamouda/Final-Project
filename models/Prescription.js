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
  datePrescrition: {
    type: String,
    required: true,
  },
  traitement: [
    {
      type: Object,
      default: [],
    },
  ],
  date: {
    type: Date,
    default: Date.now,
  },
});
module.exports = mongoose.model("prescription", PrescriptionSchema);
