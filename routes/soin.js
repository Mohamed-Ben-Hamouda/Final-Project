const express = require("express");
const router = express.Router();
const Soin = require("../models/Soin");
const Patient = require("../models/Patient");
const { check, validationResult } = require("express-validator");
const authInfermier = require("../middleware/authInfermier");

//private router
router.get("/:id", authInfermier, (req, res) => {
  Soin.find({ patient: req.params.id })
    .sort({ date: -1 })
    .then((traitementSoin) => res.json(traitementSoin))
    .catch((err) => console.log(err.message));
});

router.post(
  "/:id",
  [
    authInfermier,
    [
      check("dateSoin", "Veuillez sélectionner votre date").not().isEmpty(),
      check("traitementSoin", "Veuillez saisir les traitement du soin ")
        .not()
        .isEmpty(),
    ],
  ],
  (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.json({ errors: errors.array() });
    }
    const { dateSoin, traitementSoin } = req.body;
    soin = new Soin({
      dateSoin,
      traitementSoin,
      patient: req.params.id,
    });
    soin2 = new Soin({
      dateSoin,
      traitementSoin,
    });

    Patient.findById(req.params.id)
      .then((patient) => {
        patient.soin.push(soin2);
        soin.save();
        patient
          .save()
          .then(() => res.json({ msg: "Soin Ajouter" }))
          .catch((err) => console.error(err.message));
      })
      .then(() => res.json({ msg: "Soin Ajouter" }))
      .catch((err) => console.log(err.message));
  }
);

router.put("/:id", authInfermier, (req, res) => {
  const { dateSoin, traitementSoin } = req.body;
  //build a soin object
  let soinFilds = {};
  if (dateSoin) soinFilds.dateSoin = dateSoin;
  if (traitementSoin) soinFilds.traitementSoin = traitementSoin;
  Soin.findById(req.params.id)
    .then((soin) => {
      console.log(soin);
      if (!soin) {
        return res.json({ msg: "traitement de soin introuvable" });
        // } else if (soin.infermier.toString() !== req.infermier.id) {
        //   res.json({ msg: "not autorized" });
      } else {
        Soin.findByIdAndUpdate(
          req.params.id,
          { $set: soinFilds },
          (err, data) => {
            res.json({ msg: "soin Modifier" });
          }
        );
      }
    })
    .catch((err) => console.log(err.message));
});

module.exports = router;
