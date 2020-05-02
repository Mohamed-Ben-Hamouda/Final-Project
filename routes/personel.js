const express = require('express')
const router = express.Router()
const { check, validationResult } = require('express-validator')
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')

const Personel = require('../models/Personel')

const jwtSecret = "secret"

// enregistrement du personnel
router.post('/', [
    check('role', 'SVP enter votre function').not().isEmpty(),
    check('nom', 'SVP taper le nom du patient').not().isEmpty(),
    check('prenom', 'SVP taper le prenom du patient').not().isEmpty(),
    check('email', 'SVP taper le mail du patient').isEmail(),
    check('phone', 'SVP taper le num du tel du patient').not().isEmpty().isLength({ max: 8 }),
    check('matrucule', 'immatrucule dois etre 9 characters').not().isEmpty().isLength({ max: 9 }),
    check('password', 'Password dois etre 6 characters aux minimum').not().isEmpty().isLength({ min: 6 })
], (req, res) => {
    const errors = validationResult(req)
    if (!errors.isEmpty()) {
        return res.json({ errors: errors.array() })
    }

    const { nom, prenom, email, matricule, password } = req.body
    Personel.findOne({ matricule })
        .then(personel => {
            if (personel) {
                res.status(400).json({ msg: 'personnel dejat exists!!' })
            } else {
                personel = new Personel({
                    role,
                    nom,
                    prenom,
                    email,
                    phone,
                    matricule,
                    password
                })

                bcrypt.genSalt(10, (err, salt) => {
                    bcrypt.hash(personel.password, salt, (err, hashedPassword) => {
                        personel.password = hashedPassword
                        personel.save()

                        const payload = {
                            personel: {
                                id: personel.id
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