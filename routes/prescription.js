const express = require("express");
const router = express.Router();
const Prescription = require("../models/Prescription");
const Patient = require("../models/Patient");
const { check, validationResult } = require("express-validator");
const authMedecin = require("../middleware/authMedecin");
//private router
router.get("/:id", authMedecin, (req, res) => {
  Prescription.find({ patient: req.params.id })
    .sort({ date: -1 })
    .then((traitement) => res.json(traitement))
    .catch((err) => console.log(err.message));
});
router.post(
  "/:id",
  [
    authMedecin,
    [
      check("datePrescrition", "Veuillez sélectionner la date de Prescription")
        .not()
        .isEmpty(),
      check("traitement", "Veuillez noter les traitements du soin ")
        .not()
        .isEmpty(),
    ],
  ],
  (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.json({ errors: errors.array() });
    }
    const { datePrescription, traitement, traitfait } = req.body;
    prescription = new Prescription({
      datePrescription,
      traitement,
      traitfait,
      medecin: req.medecin.id,
      patient: req.params.id,
    });

    Patient.findById(req.params.id)
      .then((patient) => {
        patient.prescription.push(prescription);
        prescription.save();
        patient
          .save()
          .then(() => res.json({ msg: "!!!!!!!!!!!!" }))
          .catch((err) => console.error(err.message));
      })
      .then(() => res.json({ msg: "Prescription Ajouter" }))
      .catch((err) => console.log(err.message));
  }
);
// router.put("/:id", authMedecin, (req, res) => {
//     const { datePrescrition, traitement } = req.body;
//     //build a prescription object
//     let prescritionFilds = {};
//     if (datePrescrition) prescritionFilds.datePrescrition = datePrescrition;
//     if (traitement) prescritionFilds.traitementSoin = traitementSoin;
//     Prescription.findById(req.params.id)
//         .then((prescription) => {
//             console.log(prescription);
//             if (!prescription) {
//                 return res.json({ msg: "traitement de prescrition introuvable" });
//             } else {
//                 Prescription.findByIdAndUpdate(
//                     req.params.id,
//                     { $set: prescritionFilds },
//                     (err, data) => {
//                         res.json({ msg: "prescrition Modifier" });
//                     }
//                 );
//             }
//         })
//         .catch((err) => console.log(err.message));
// });
module.exports = router;
