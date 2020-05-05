const express = require("express");
const router = express.Router();
const authInfermier = require("../middleware/authInfermier");
const { check, validationResult } = require("express-validator");
const Patient = require("../models/Patient");
const Suivie = require("../models/Suivie");

// Get suivie
// Private Route
router.get("/:id", authInfermier, (req, res) => {
  Suivie.find({ patient: req.params.id })
    .sort({ date: -1 })
    .then((dateSuivie) => res.json(dateSuivie))
    .catch((err) => console.log(err.message));
});

// Add music
// Private Route
router.post(
  "/:id",
  [
    authInfermier,
    [
      check("dateSuivie", "date est obligatoire").not().isEmpty(),
      check("heureSuivie", "l'heure est obligatoire").not().isEmpty(),
      check("temperature", " la temperature est obligatoire").not().isEmpty(),
      check("respiration", "la respiration est obligatoire").not().isEmpty(),
      check("pulsation", "la pulsation est obligatoire").not().isEmpty(),
    ],
  ],
  (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    const {
      dateSuivie,
      heureSuivie,
      temperature,
      respiration,
      pulsation,
    } = req.body;

    suivie = new Suivie({
      dateSuivie,
      heureSuivie,
      temperature,
      respiration,
      pulsation,
      patient: req.params.id,
    });
    suivie2 = new Suivie({
      dateSuivie,
      heureSuivie,
      temperature,
      respiration,
      pulsation,
    });

    Patient.findById(req.params.id)
      .then((patient) => {
        patient.suivie.push(suivie2);
        suivie.save();
        patient
          .save()
          .then(() => res.json({ msg: "Suivie patient Ajouter" }))
          .catch((err) => console.error(err.message));
      })
      .then(() => res.json({ msg: "Suivie patient Ajouter" }))
      .catch((err) => {
        console.error(err.message);
        res.status(500).send("erreur du serveur");
      });
  }
);

// Update suivie
// Private Route
router.put("/infemier/:id", authInfermier, (req, res) => {
  const { date, temperature, respiration, pulsation } = req.body;

  // Build an suivie object
  let suivieFields = { date, temperature, respiration, pulsation };
  if (date) suivieFields.date = date;
  if (temperature) suivieFields.temperature = temperature;
  if (respiration) suivieFields.respiration = respiration;
  if (pulsation) suivieFields.pulsation = pulsation;

  Suivie.findById(req.params.id)
    .then((suivie) => {
      if (!suivie) {
        return res.status(404).json({ msg: "Suivie non trouver" });
      } else if (suivie.patient.toString() !== req.user.id) {
        res.status(401).json({ msg: "Non authoriser" });
      } else {
        Suivie.findByIdAndUpdate(
          req.params.id,
          { $set: suivieFields },
          (err, data) => {
            res.json({ msg: "Suivie Updated!" });
          }
        );
      }
    })
    .catch((err) => {
      console.error(err.message);
      res.status(500).send("Server error");
    });
});

module.exports = router;
