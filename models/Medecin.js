const mongoose = require("mongoose");

const MedecinSchema = mongoose.Schema({
  infermier: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "infermier",
    },
  ],
  patient: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "patient",
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
  email: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
  matricule: {
    type: String,
    required: true,
  },

  phone: {
    type: Number,
    required: true,
  },
  image: {
    type: Number,
    required: false,
  },
  date: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model("medecin", MedecinSchema);
