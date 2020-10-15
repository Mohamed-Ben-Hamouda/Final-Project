const express = require("express");
const router = express.Router();
const { check, validationResult } = require("express-validator");
const CovidTest = require("../models/CovidTest");
const Patient = require("../models/Patient");
const authInfermier = require("../middleware/authInfermier");

//private router
router.get("/:id", authInfermier, (req, res) => {
  CovidTest.find({ patient: req.params.id })
    .sort({ date: -1 })
    .then((resultat) => res.json(resultat))
    .catch((err) => console.log(err.message));
});

router.post(
  "/:id",
  [
    authInfermier,
    [
      check("dateTest", "Veuillez sélectionner votre date").not().isEmpty(),
      check("resultat", "Veuillez crochez le resultat di Test").not().isEmpty(),
      check("testName", "Veuillez saisir Le nom du test ").not().isEmpty(),
    ],
  ],
  (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.json({ errors: errors.array() });
    }
    const { testName, resultat, dateTest } = req.body;
    covidTest = new CovidTest({
      testName,
      resultat,
      dateTest,
      patient: req.params.id,
    });

    covidTest
      .save()
      .then((data) => res.json(data))
      .catch((err) => console.error(err.message));
  }
);

router.put("/:id", authInfermier, (req, res) => {
  const { testName, resultat, dateTest } = req.body;

  let covidFilds = { testName, resultat, dateTest };
  if (testName) covidFilds.testName = testName;
  if (resultat) covidFilds.resultat = resultat;
  if (dateTest) covidFilds.dateTest = dateTest;

  CovidTest.findById(req.params.id)
    .then((testName) => {
      if (!testName) {
        return res.json({ msg: "Covid test introuvable" });
      } else {
        CovidTest.findByIdAndUpdate(
          req.params.id,
          { $set: { ...covidFilds } },
          (err, data) => {
            res.json({ msg: "Covid Test Modifier" });
          }
        );
      }
    })
    .catch((err) => console.log(err.message));
});

module.exports = router;
