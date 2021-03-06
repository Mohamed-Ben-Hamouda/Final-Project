const mongoose = require("mongoose");

const SoinSchema = mongoose.Schema({
  patient: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "patient",
  },
  infermier: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "infermier",
  },
  dateSoin: {
    type: String,
    required: true,
  },
  traitementSoin: [
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
module.exports = mongoose.model("soin", SoinSchema);
