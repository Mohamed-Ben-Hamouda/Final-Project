const mongoose = require("mongoose");

const PatientSchema = mongoose.Schema({
  infermier: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "infermier",
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
  cin: {
    type: Number,
    required: true,
  },
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
    required: true,
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
