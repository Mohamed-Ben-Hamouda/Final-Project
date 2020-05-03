const express = require('express')
const router = express.Router()
const { check, validationResult } = require('express-validator')
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')

const Medecin = require('../models/Medecin')

const jwtSecret = "secret"

// enregistrement du Medecin
router.post('/', [
    check('nom', 'SVP taper le nom du patient').not().isEmpty(),
    check('prenom', 'SVP taper le prenom du patient').not().isEmpty(),
    check('email', 'SVP taper le mail du patient').isEmail(),
    check('phone', 'SVP taper le num du tel du patient').not().isEmpty(),
    check('matricule', 'immatrucule dois etre 9 characters').not().isEmpty().isLength({ max: 9 }),
    check('password', 'Password dois etre 6 characters aux minimum').not().isEmpty().isLength({ min: 6 })
], (req, res) => {
    const errors = validationResult(req)
    if (!errors.isEmpty()) {
        return res.json({ errors: errors.array() })
    }
    const { nom, prenom, email, phone, matricule, password } = req.body


    Medecin.findOne({ matricule })
        .then(medecin => {
            if (medecin) {
                res.status(400).json({ msg: 'Medecin dejat exists!!' })
            } else {
                newMedecin = new Medecin({ nom, prenom, email, phone, matricule, password })
                newMedecin.save()
                res.status(400).json({ msg: 'Medecin ajouter!!' })

            }
        })

        .catch(err => {
            console.error(err.message)
            res.status(500).send('erreure du serveur')
        })
})
//get all Medecin
router.get('/', (req, res) => {
    Medecin.find().sort({ date: -1 })
        .then(medecin => res.json(medecin))
        .catch(err => {
            console.error(err.message)
            res.status(500).send('Server Error')
        })
})
//get one Medecin
router.get('/:id', (req, res) => {
    Medecin.findById(req.params.id)
        .then(medecin => res.json(medecin))
        .catch(err => { console.error(err.message) })
})


module.exports = router