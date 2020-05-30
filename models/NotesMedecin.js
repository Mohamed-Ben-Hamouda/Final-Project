const mongoose = require("mongoose");

const NoteMedecinSchema = mongoose.Schema({
  patient: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "patient",
  },
  infermier: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "infermier",
  },
  medecin: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "patient",
  },
  note: {
    type: String,
    required: true,
  },
  date: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model("infermier", InfermierSchema);
