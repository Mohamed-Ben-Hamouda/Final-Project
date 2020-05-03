const express = require('express')
const router = express.Router()
const { check, validationResult } = require('express-validator')
const auth = require('../middleware/auth')
const Patient = require('../models/Patient')


// enregistrement du patient
router.post('/', [
    check('nom', 'SVP taper le nom du patient').not().isEmpty(),
    check('prenom', 'SVP taper le prenom du patient').not().isEmpty(),
    check('dateEn', 'SVP selectionner la date dentrer').not().isEmpty(),
    check('email', 'SVP taper le mail du patient').isEmail(),
    check('phone', 'SVP taper le num du tel du patient').not().isEmpty().isLength({ max: 8 }),
    check('cin', 'SVP taper le num du cin du patient').not().isEmpty().isLength({ max: 8 }),
    check('origin', 'SVP enter lorigine de la maladie').not().isEmpty(),
    check('numChambre', 'SVP enter le numero de Chambre du patient ').not().isEmpty(),
    check('numLit', 'SVP enter le numero du lit du patient').not().isEmpty(),
    check('etat', 'SVP quel est letat du patient').not().isEmpty(),
    check('ATCD', 'SVP séléctionner les ATCD du patient').not().isEmpty(),

], (req, res) => {
    const errors = validationResult(req)
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() })
    }
    const { nom, prenom, dateEn, email, phone, cin, origin, numChambre, numLit, etat, ATCD } = req.body

    Patient.findOne({ cin })
        .then(patient => {
            if (patient) { res.status(400).json({ msg: 'Patient exists!!' }) }
            else {
                newpatient = new Patient({
                    nom, prenom, dateEn, email, phone, cin, origin, numChambre, numLit, etat, ATCD,
                    // infermier: req.infermier.id
                })
                newpatient.save()
                res.status(400).json({ msg: 'Patient ajouter!!' })
            }
        })
        .catch(err => {
            console.error(err.message)
            res.status(500).send('erreure du serveur')
        })
})
// Update patient
// Private Route
router.put('/:id', (req, res) => {
    const { nom, prenom, dateEn, email, phone, cin, origin, numChambre, numLit, etat, ATCD } = req.body

    // Build a patient object
    let patientFields = {}
    if (nom) patientFields.nom = nom
    if (prenom) patientFields.prenom = prenom
    if (dateEn) patientFields.dateEn = dateEn
    if (email) patientFields.email = email
    if (phone) patientFields.phone = phone
    if (cin) patientFields.cin = cin
    if (origin) patientFields.origin = origin
    if (numChambre) patientFields.numChambre = numChambre
    if (numLit) patientFields.numLit = numLit
    if (etat) patientFields.etat = etat
    if (ATCD) patientFields.ATCD = ATCD

    Patient.findById(req.params.id)
        .then(patient => {
            if (!patient) {
                return res.status(404).json({ msg: 'patient not found' })
            }

            else {
                Patient.findByIdAndUpdate(req.params.id, { $set: patientFields }, (err, data) => {
                    res.json({ msg: "patient Updated!" })
                })
            }
        })
        .catch(err => {
            console.error(err.message)
            res.status(500).send('Server error')
        })
})
//get all patient
router.get('/', (req, res) => {
    Patient.find().sort({ date: -1 })
        .then(patient => res.json(patient))
        .catch(err => {
            console.error(err.message)
            res.status(500).send('Server Error')
        })
})
//get one patient
router.get('/:id', (req, res) => {
    Patient.findById(req.params.id)
        .then(patient => res.json(patient))
        .catch(err => { console.error(err.message) })
})




module.exports = router