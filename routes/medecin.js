const express = require("express");
const router = express.Router();
const { check, validationResult } = require("express-validator");
const authMedecin = require("../middleware/authMedecin");
const Medecin = require("../models/Medecin");
const Infermier = require("../models/Infermier");

// enregistrement du Medecin
router.post(
  "/medecin",
  [
    check("nom", "SVP taper le nom du patient").not().isEmpty(),
    check("prenom", "SVP taper le prenom du patient").not().isEmpty(),
    check("email", "SVP taper le mail du patient").isEmail(),
    check("phone", "SVP taper le num du tel du patient").not().isEmpty(),
    check("image", "SVP entre le lien ver votre phote").not().isEmpty(),
    check("matricule", "immatrucule dois etre 9 characters").not().isEmpty().isLength({ max: 9 }),
    check("password", "Password dois etre 6 characters aux minimum").not().isEmpty().isLength({ min: 6 }),
  ],
  (req, res) => {
    var errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.json({ errors: errors.array() });
    }
    var { nom, prenom, email, phone, image, matricule, password } = req.body;

    Medecin.findOne({ matricule })
      .then((medecin) => {
        if (medecin) {
          res.status(400).json({ msg: "Medecin dejat exists!!" });
        } else {
          Medecin = new Medecin({
            nom,
            prenom,
            email,
            phone,
            image,
            matricule,
            password,
          });
          bcrypt.genSalt(10, (err, salt) => {
            bcrypt.hash(medecin.password, salt, (err, hashedPassword) => {
              medecin.password = hashedPassword;
              medecin.save();

              var payload = {
                medecin: {
                  id: medecin.id,
                },
              };
              jwt.sign(payload, jwtSecret, { expiresIn: 3600000 },
                (err, token) => {
                  if (err) throw err;
                  res.json({ token });
                }
              );
            });
          });
        }
      })

      .catch((err) => {
        console.error(err.message);
        res.status(500).send("errrrreure du serveur");
      });
  }
);
//get all Medecin
router.get("/medecin", authMedecin, (req, res) => {
  Medecin.find()
    .sort({ date: -1 })
    .then((medecin) => res.json(medecin))
    .catch((err) => {
      console.error(err.message);
      res.status(500).send("Server Error");
    });
});
//get one Medecin
router.get("/:id", (req, res) => {
  Medecin.findById(req.params.id)
    .then((medecin) => res.json(medecin))
    .catch((err) => {
      console.error(err.message);
    });
});

//get LES infermier dun medecin
router.get("/infermier/:id", authMedecin, (req, res) => {
  Medecin.findById(req.params.id)
    .populate("infermier")
    // .populate("patient")
    .then((medecin) => res.json(medecin.infermier))
    .catch((err) => console.error(err.message));
});
// Update infermier
// Private Route
router.put("/medecin/:id", authMedecin, (req, res) => {
  const {
    nom,
    prenom,
    email,
    phone,
    image,
    matricule,
    password,
  } = req.body;

  // Build infermier object
  let infermierFields = {};
  if (nom) infermierFields.nom = nom;
  if (prenom) infermierFields.prenom = prenom;
  if (email) infermierFields.email = email;
  if (phone) infermierFields.phone = phone;
  if (image) infermierFields.image = image;
  if (matricule) infermierFields.matricule = matricule;
  if (password) infermierFields.pasword = password;


  Infermier.findById(req.params.id)
    .then((infermier) => {
      if (!infermier) {
        return res.status(404).json({ msg: "infermier not found" });
      } else {
        Infermier.findByIdAndUpdate(
          req.params.id,
          { $set: infermierFields },
          (err, data) => {
            res.status(200).json({ msg: "infermier Updated!" });
          }
        );
      }
    })
    .catch((err) => {
      console.error(err.message);
      res.status(500).send("Server error");
    });
});
//del infermier
// Private Route
router.delete('/:id', authMedecin, (req, res) => {
  Infermier.findById(req.params.id)
    .then(infermier => {
      if (!infermier) {
        return res.status(404).json({ msg: 'infermier not found' })
      }
      else {
        Infermier.findByIdAndDelete(req.params.id, (err, data) => {
          res.json({ msg: "infermier suprimer" })
        })
      }
    })
    .catch(err => {
      console.error(err.message)
      res.status(500).send('Server error')
    })
})
//get les patients d'infermier
router.get("/patient/:infermierId", (req, res) => {
  Infermier.findById(req.infermier.id)
    .populate("patient")
    .then((infermier) => res.json(infermier))
    .catch((err) => {
      console.error(err.message);
      res.status(500).send("erreure du serveur");
    });
});
//get les patients de linfermier du medecin connecter
router.get("/patient/:id", authMedecin, (req, res) => {
  Medecin.findById(req.params.id)
    .populate("patient")
    .then((medecin) => res.json(medecin.patient))
    .catch((err) => console.error(err.message));
});


module.exports = router;
