const mongoose = require("mongoose");

const SoinSchema = mongoose.Schema({
  patient: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "patient",
  },

  dateSoin: {
    type: String,
    required: true,
  },
  traitementSoin: {
    type: String,
    required: true,
  },
  date: {
    type: Date,
    default: Date.now,
  },
});
module.exports = mongoose.model("soin", SoinSchema);
