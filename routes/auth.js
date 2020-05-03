const express = require('express')
const router = express.Router()
const { check, validationResult } = require('express-validator')
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')

const auth = require('../middleware/auth')
const ChefServise = require('../models/ChefServise')

const jwtSecret = "secret"


// Get the logged in  user 
// Private route
router.get('/', auth, (req, res) => {
    Personel.findById(req.user.id)
        .then(personel => res.json(personel))
        .catch(err => {
            console.error(err.message)
            res.status(500).send('erreure du serveur')
        })
})

// Login the user
router.post('/', [
    check('matricule', 'SVP taper un matricule valid!!!!').not().isEmpty().isLength({ max: 9 }),
    check('password', 'Password est necessaire!').not().isEmpty()
], (req, res) => {
    const errors = validationResult(req)
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() })
    }

    const { matricule, password } = req.body

    ChefServise.findOne({ matricule })
        .then(chefServise => {
            if (!chefServise) {
                // Check is user exists
                return res.status(400).json({ msg: "SVP faite votre enregistrement avant!!!!!" })
            } else {
                // Compare Password
                bcrypt.compare(password, user.password, (err, isMatch) => {
                    if (err) {
                        console.log(err.message)
                    } else if (isMatch) {
                        const payload = {
                            user: {
                                id: chefServise.id
                            }
                        }

                        jwt.sign(payload, jwtSecret, { expiresIn: 3600000 }, (err, token) => {
                            if (err) throw err
                            res.json({ token })
                        })
                    } else {
                        return res.status(400).json({ msg: "Password incorrecte" })
                    }
                })
            }
        })
        .catch(err => {
            console.error(err.message)
            res.status(500).send('erreure du serveur')
        })
})


module.exports = router