const express = require("express");
const router = express.Router();
const auth = require("../middleware/authChef");
const { check, validationResult } = require("express-validator");
const Patient = require("../models/Patient");
const Suivie = require("../models/Suivie");

// Get suivie
// Private Route
router.get("/patient", auth, (req, res) => {
  Suivie.find({ patient: req.patient.id })
    .sort({ date: -1 })
    .then((songs) => res.json(songs))
    .catch((err) => {
      console.error(err.message);
      res.status(500).send("erreur du serveur");
    });
});

// Add music
// Private Route
router.post(
  "/patient",
  [
    auth,
    [
      check("date", "date est obligatoire").not().isEmpty().isDate(),
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

    const { date, temperature, respiration, pulsation } = req.body;

    const newSuivie = new Suivie({
      date,
      temperature,
      respiration,
      pulsation,
      patient: req.patient.id,
    });

    Patient.findById(patient.id)
      .then((patient) => {
        patient.suivie.puch(newCovidTest);
        suivie.patient = patient;
        newSuivie.save();
        patient
          .save()
          .then(() => res.json({ msg: "Suivi patient Ajouter" }))
          .catch((err) => console.error(err.message));
      })
      .then(() => res.json())
      .catch((err) => {
        console.error(err.message);
        res.status(500).send("erreur du serveur");
      });
  }
);

// Update suivie
// Private Route
router.put("/patient/:id", auth, (req, res) => {
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
