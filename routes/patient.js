const express = require("express");
const router = express.Router();
const { check, validationResult } = require("express-validator");
const auth = require("../middleware/auth");

const Patient = require("../models/Patient");



// enregistrement du patient
router.post(
  "/",
  [
    auth,
    [
      check("nom", "SVP taper le nom du patient").not().isEmpty(),
      check("prenom", "SVP taper le prenom du patient").not().isEmpty(),
      check("dateEn", "SVP selectionner la date d'entrer").isDate(),
      check("email", "SVP taper le mail du patient").isEmail(),
      check("phone", "SVP taper le num du tel du patient")
        .not()
        .isEmpty()
        .isLength({ max: 8 }),
      check("origin", "SVP enter lorigine de la maladie").not().isEmpty(),
      check("numChambre", "SVP enter le numero de Chambre du patient ")
        .not()
        .isEmpty(),
      check("numLit", "SVP enter le numero du lit du patient").not().isEmpty(),
      check("etat", "SVP quel est letat du patient").not().isEmpty(),
      check("ATCD", "SVP séléctionner les ATCD du patient").not().isEmpty(),
    ],
  ],
  (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.json({ errors: errors.array() });
    }

    const {
      nom,
      prenom,
      dateEnemail,
      phone,
      origin,
      numChambre,
      numLit,
      etat,
      ATCD,
    } = req.body;
    patient = new Patient({
        cin,
        nom,
        prenom,
        dateEnemail,
        phone,
        origin,
        numChambre,
        numLit,
        etat,
        ATCD,
      });
         
      .catch((err) => {
        console.error(err.message);
        res.status(500).send("erreure du serveur");
      });
  }
);

module.exports = router;
