const express = require("express");
const router = express.Router();
const CovidTest = require("../models/CovidTest");
const Patient = require("../models/Patient");
<<<<<<< HEAD
const auth = require("../middleware/auth")
const { check } = require('express-validator')


router.post("/:patientId", [auth,
  [
    check("dateTest", "Veuillez sélectionner votre date").not().isEmpty(),
    check("resultat", "Veuillez crochez le resultat di Test").not().isEmpty(),
    check("testName", "Veuillez saisir Le nom du test ").not().isEmpty(),
  ]], (req, res) => {
    const { title, body } = req.body;
=======
router.post(
  "/patient/:patientId",
  [
    auth,
    [
      check("dateTest", "Veuillez sélectionner votre date").not().isEmpty(),
      check("resultat", "Veuillez crochez le resultat di Test").not().isEmpty(),
      check("testName", "Veuillez saisir Le nom du test ").not().isEmpty(),
    ],
  ],
  (req, res) => {
    const { testName, resultat, dateTest } = req.body;
>>>>>>> origin/Maryem-Branch
    let newCovidTest = new CovidTest({
      testName,
      resultat,
      dateTest,
    });
<<<<<<< HEAD
    //
=======
    //get personel by id
>>>>>>> origin/Maryem-Branch
    Patient.findById(req.params.patientId)
      .then((patient) => {
        patient.covidTest.puch(newCovidTest);
        newCovidTest.patient = patient;
        newCovidTest.save();
        patient
          .save()
          .then(() => res.json({ msg: "Test Covid Ajouter" }))
          .catch((err) => console.error(err.message));
      })
      .catch((err) => console.error(err.message));
  }
);

router.put("/patient/:id", auth, (req, res) => {
  const { testName, resultat, dateTest } = req.body;
  //build a soin object
  let covidFilds = { testName, resultat, dateTest };
  if (testName) covidFilds.testName = testName;
  if (resultat) covidFilds.resultat = resultat;
  if (dateTest) covidFilds.dateTest = dateTest;

  CovidTest.findById(req.params.id)
    .then((testName) => {
      if (!testName) {
        return res.json({ msg: "Covid test introuvable" });
      } else if (covidTest.patient.toString() !== req.patient.id) {
        //params
        res.json({ msg: "not autorized" });
      } else {
        Soin.findByIdAndUpdate(
          req.params.id,
          { $set: covidFilds },
          (err, data) => {
            res.json({ msg: "Covid Test Modifier" });
          }
        );
      }
    })
    .catch((err) => console.log(err.message));
});
