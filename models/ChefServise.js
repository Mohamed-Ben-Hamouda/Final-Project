const mongoose = require("mongoose");

const ChefServiseSchema = mongoose.Schema({
  patient: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "patient"
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
  date: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model("chefServise", ChefServiseSchema);
