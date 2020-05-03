const express = require("express");
const router = express.Router();
const CovidTest = require("../models/CovidTest");
const Patient = require("../models/Patient");
const auth = require("../middleware/auth")
const { check } = require('express-validator')


router.post("/:patientId", [auth,
  [
    check("dateTest", "Veuillez sélectionner votre date").not().isEmpty(),
    check("resultat", "Veuillez crochez le resultat di Test").not().isEmpty(),
    check("testName", "Veuillez saisir Le nom du test ").not().isEmpty(),
  ]], (req, res) => {
    const { title, body } = req.body;
    let newCovidTest = new CovidTest({
      testName,
      resultat,
      dateTest,
    });
    //
    Patient.findById(req.params.patientId)
      .then((patient) => {
        newCovidTest.patient = patient;
      })
      .catch((err) => console.error(err.message));
  }
);
