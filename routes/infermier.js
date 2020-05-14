const express = require("express");
const router = express.Router();
const { check, validationResult } = require("express-validator");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const jwtSecret = "secret";
const authInfermier = require("../middleware/authInfermier");

const Infermier = require("../models/Infermier");

// enregistrement du infermier
router.post(
  "/",

  [
    check("nom", "SVP taper le nom du patient").not().isEmpty(),
    check("prenom", "SVP taper le prenom du patient").not().isEmpty(),
    check("email", "SVP taper le mail du patient").isEmail(),
    check("phone", "SVP taper le num du tel du patient").not().isEmpty(),
    check("matricule", "immatrucule dois etre 9 characters")
      .not()
      .isEmpty()
      .isLength({ max: 9 }),
    check("password", "Password dois etre 6 characters aux minimum")
      .not()
      .isEmpty()
      .isLength({ min: 6 }),
  ],
  (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.json({ errors: errors.array() });
    }
    const { nom, prenom, email, phone, matricule, password } = req.body;

    Infermier.findOne({ matricule })
      .then((infermier) => {
        if (infermier) {
          res.status(400).json({ msg: "Infermier dejat exists!!" });
        } else {
          infermier = new Infermier({
            nom,
            prenom,
            email,
            phone,
            matricule,
            password,
          });
          bcrypt.genSalt(10, (err, salt) => {
            bcrypt.hash(infermier.password, salt, (err, hashedPassword) => {
              infermier.password = hashedPassword;
              infermier.save();
              // res.status(400).json({ msg: "infermier ajouter!!" });

              const payload = {
                infermier: {
                  id: infermier.id,
                },
              };
              jwt.sign(
                payload,
                jwtSecret,
                { expiresIn: 3600000 },
                (err, token) => {
                  if (err) throw err;
                  res.json(token);
                  // console.log(token);
                }
              );
            });
          });
        }
      })
      .catch((err) => {
        console.error(err.message);
        res.status(500).send("erreur du serveur");
      });
  }
);
//get all infermier
router.get("/infermier", authInfermier, (req, res) => {
  Infermier.find()
    .sort({ date: -1 })
    .then((infermier) => res.json(infermier))
    .catch((err) => {
      console.error(err.message);
      res.status(500).send("Server Error");
    });
});
//get one infermier
router.get("/:id", authInfermier, (req, res) => {
  Infermier.findById(req.params.id)
    .then((infermier) => res.json(infermier))
    .catch((err) => {
      console.error(err.message);
    });
});

//get les patients d'infermier
router.get("/patientInf", authInfermier, (req, res) => {
  console.log(req.infermier);
  Infermier.findById(req.infermier.id)
    .populate("patient")
    .then((infermier) => res.json(infermier.patient))
    .catch((err) => console.error(err.message));
});

module.exports = router;
