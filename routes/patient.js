const express = require('express')
const router = express.Router()
const { check, validationResult } = require('express-validator')
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')

const Patient = require('../models/Patient')

const jwtSecret = "secret"

// enregistrement du patient
router.post('/', [
    check('nom', 'SVP taper le nom du patient').not().isEmpty(),
    check('prenom', 'SVP taper le prenom du patient').not().isEmpty(),
    check('dateEn', 'SVP selectionner la date dentrer').isDate(),
    check('email', 'SVP taper le mail du patient').isEmail(),
    check('phone', 'SVP taper le num du tel du patient').not().isEmpty().isLength({ max: 8 }),
    check('origin', 'SVP enter lorigine de la maladie').not().isEmpty(),
    check('numChambre', 'SVP enter le numero de Chambre du patient ').not().isEmpty(),
    check('numLit', 'SVP enter le numero du lit du patient').not().isEmpty(),
    check('etat', 'SVP quel est letat du patient').not().isEmpty(),
    check('ATCD', 'SVP séléctionner les ATCD du patient').not().isEmpty(),
    check('matrucule', 'immatrucule dois etre 9 characters').not().isEmpty().isLength({ max: 9 }),
    check('password', 'Password dois etre 6 characters aux minimum').not().isEmpty().isLength({ min: 6 })
], (req, res) => {
    const errors = validationResult(req)
    if (!errors.isEmpty()) {
        return res.json({ errors: errors.array() })
    }

    const { nom, prenom, email, matrucule, password } = req.body
    Patient.findOne({ email })
        .then(patient => {
            if (patient) {
                res.status(400).json({ msg: 'Patient existe ....!!' })
            } else {
                patient = new Patient({ nom, prenom, dateEnemail, phone, origin, numChambre, numLit, etat, ATCD, matrucule, password })

                bcrypt.genSalt(10, (err, salt) => {
                    bcrypt.hash(patient.password, salt, (err, hashedPassword) => {
                        patient.password = hashedPassword
                        patient.save()

                        const payload = {
                            user: {
                                id: patient.id
                            }
                        }

                        jwt.sign(payload, jwtSecret, { expiresIn: 3600000 }, (err, token) => {
                            if (err) throw err
                            res.json({ token })
                        })

                    })
                })
            }
        })
        .catch(err => {
            console.error(err.message)
            res.status(500).send('erreure du serveur')
        })
})


module.exports = router