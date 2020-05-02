const express = require("express");
const router = express.Router();
const Soin = require("../models/Soin");
const { check, validationResult } = require("express-validator");
const auth = require("../middleware/auth");

//private router
router.get("/:patientId", auth, (req, res) => {
  Soin.find({ patient: req.params.patientId })
    .sort({ date: -1 })
    .then((traitementSoin) => res.json(traitementSoin))
    .catch((err) => console.log(err.message));
});

router.post(
  "/",
  [
    auth,
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
    const newSoin = new Soin({
      dateSoin,
      traitementSoin,
      personel: req.personel.id,
    });
    newSoin
      .save()
      .then((song) => res.json(song))
      .catch((err) => console.log(err.message));
  }
);

router.put("/:id", auth, (req, res) => {
  const { dateSoin, traitementSoin } = req.body;
  //build a soin object
  let soinFilds = {};
  if (dateSoin) soinFilds.dateSoin = dateSoin;
  if (traitementSoin) soinFilds.traitementSoin = traitementSoin;

  Soin.findById(req.params.id)
    .then((soin) => {
      if (!soin) {
        return res.json({ msg: "traitement de soin introuvable" });
      } else if (soin.patient.toString() !== req.patient.id) {
        res.json({ msg: "not autorized" });
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
