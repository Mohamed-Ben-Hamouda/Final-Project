const mongoose = require("mongoose");

const PatientSchema = mongoose.Schema({
  personel: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "patient",
  },
  soin: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "soin",
    },
  ],
  prescription: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "prescription",
    },
  ],
  suivie: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "suivie",
    },
  ],
  covidTest: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "covidTest",
    },
  ],
  nom: {
    type: String,
    required: true,
  },
  prenom: {
    type: String,
    required: true,
  },
  dateEn: {
    type: Date,
    default: Date.now,
  },
  email: {
    type: String,
    required: true,
  },
  phone: {
    type: String,
    required: true,
  },
  origin: {
    type: String,
    required: true,
  },
  numChambre: {
    type: String,
    required: true,
  },
  numLit: {
    type: String,
    required: true,
  },
  etat: {
    type: Boolean,
    required: true,
  },
  ATCD: [
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
module.exports = mongoose.model("patient", PatientSchema);
