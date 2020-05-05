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
    covidTest2 = new CovidTest({
      testName,
      resultat,
      dateTest,
      patient: req.params.id,
    });

    Patient.findById(req.params.id)
      .then((patient) => {
        patient.covidTest.push(covidTest2);
        covidTest.save();
        patient
          .save()
          .then(() => res.json())
          .catch((err) => console.error(err.message));
      })
      .then(() => res.json({ msg: "Test Covid Ajouter" }))
      .catch((err) => console.error(err.message));
  }
);

// router.put("/infermier/:id", authInferier, (req, res) => {
//   const { testName, resultat, dateTest } = req.body;
//   //build a soin object
//   let covidFilds = { testName, resultat, dateTest };
//   if (testName) covidFilds.testName = testName;
//   if (resultat) covidFilds.resultat = resultat;
//   if (dateTest) covidFilds.dateTest = dateTest;

//   CovidTest.findById(req.params.id)
//     .then((testName) => {
//       if (!testName) {
//         return res.json({ msg: "Covid test introuvable" });
//       } else if (covidTest.patient.toString() !== req.patient.id) {
//         //params
//         res.json({ msg: "not autorized" });
//       } else {
//         Soin.findByIdAndUpdate(
//           req.params.id,
//           { $set: covidFilds },
//           (err, data) => {
//             res.json({ msg: "Covid Test Modifier" });
//           }
//         );
//       }
//     })
//     .catch((err) => console.log(err.message));
// });

module.exports = router;
