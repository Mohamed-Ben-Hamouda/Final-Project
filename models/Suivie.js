const mongoose = require("mongoose");

const SuivieSchema = mongoose.Schema({
  patient: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "patient",
  },

  dateSuivie: {
    type: String,
    required: true,
  },
  heureSuivie: {
    type: String,
    required: true,
  },
  temperature: {
    type: String,
    required: true,
  },
  respiration: {
    type: String,
    required: true,
  },
  pulsation: {
    type: String,
    required: true,
  },

  date: {
    type: Date,
    default: Date.now,
  },
});
module.exports = mongoose.model("suivie", SuivieSchema);
