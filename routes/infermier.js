const express = require("express");
// const mailer = require("nodemailer");
const router = express.Router();
const { check, validationResult } = require("express-validator");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const jwtSecret = "secret";
const authInferier = require("../middleware/authInfermier");
const authMedecin = require("../middleware/authMedecin");

const Infermier = require("../models/Infermier");
const Medecin = require("../models/Medecin");
const { text } = require("express");

// enregistrement du infermier
router.post(
  "/",
  [
    authMedecin,

    [
      check("nom", "SVP taper le nom du patient").not().isEmpty(),
      check("prenom", "SVP taper le prenom du patient").not().isEmpty(),
      check("email", "SVP taper le mail du patient").isEmail(),
      check("phone", "SVP taper le num du tel du patient").not().isEmpty(),
      check("image", "SVP entrer le lien vers votre photo").not().isEmpty(),
      check("matricule", "immatrucule dois etre 9 characters")
        .not()
        .isEmpty()
        .isLength({ max: 9 }),
      check("password", "Password dois etre 6 characters aux minimum")
        .not()
        .isEmpty()
        .isLength({ min: 6 }),
    ],
  ],
  (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.json({ errors: errors.array() });
    }
    const { nom, prenom, email, phone, image, matricule, password } = req.body;

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
            image,
            matricule,
            password,
            medecin: req.medecin.id
          });
          Medecin.findById(req.medecin.id).then((medecin) => {
            medecin.infermier.push(infermier);
            // medecin.infermier.push(patient);
            infermier.medecin = medecin;
            // infermier.save();
            medecin.save();
            ///////////////
            // smtpTransport = mailer.createTransport("SMTP", {
            //   service: "Gmail",
            //   auth: {
            //     user: "abmabmabm007@gmail.com",
            //     pass: "0123456789+"
            //   }
            // });
            // mail = {
            //   from: "medbenhamouda81@gmail.com",
            //   to: email,
            //   subject: "PASSWORD",
            //   html: password
            // }

            // smtpTransport.sendMail(mail, (error, response) => {
            //   if (error) {
            //     console.log("Erreur lors de l'envoie du mail!");
            //     console.log(error);
            //   } else {
            //     console.log("Mail envoyé avec succès!")
            //   }
            //   smtpTransport.close();
            // });
            /////////////////////

          });

          bcrypt.genSalt(10, (err, salt) => {
            bcrypt.hash(infermier.password, salt, (err, hashedPassword) => {
              infermier.password = hashedPassword;
              infermier.save();

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
                  res.json(infermier);
                  console.log(infermier);
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
router.get("/infermier", (req, res) => {
  Infermier.find()
    .sort({ date: -1 })
    .then((infermier) => res.json(infermier))
    .catch((err) => {
      console.error(err.message);
      res.status(500).send("Server Error");
    });
});

//get one infermier
router.get("/:id", authInferier, (req, res) => {
  Infermier.findById(req.params.id)
    .then((infermier) => res.json(infermier))
    .catch((err) => {
      console.error(err.message);
    });
});

//get les patients d'infermier
router.get("/patient/:infermierId", (req, res) => {
  Infermier.findById(req.infermier.id)
    .populate("patient")
    .populate("medecin")
    .then((infermier) => res.json(infermier))
    .catch((err) => {
      console.error(err.message);
      res.status(500).send("erreure du serveur");
    });
});
// router.get("/", authInfermier, (req, res) => {
//   Infermier.findById(req.infermier.id)
//     .populate("patient")
//     .then((infermier) => res.json(infermier))
//     .catch((err) => {
//       console.error(err.message);
//       res.status(500).send("erreure du serveur");
//     });
// });
// router.get("/patient/:infermierId", (req, res) => {
//   Infermier.findById(req.params.infermierId)
//     .populate("patient")
//     .then((infermier) => res.json(infermier.patient))
//     .catch((err) => console.error(err.message));
// });

module.exports = router;
