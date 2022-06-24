const pasajeCtrl = require('../controllers/pasaje.controller');

const express = require('express');
const persona = require('../models/persona');
const router = express.Router();

router.get('/', pasajeCtrl.getPasajes);
router.get('/:id', pasajeCtrl.getPasaje)
router.post('/', pasajeCtrl.createPasaje);
router.put('/:id', pasajeCtrl.editPasaje);
router.delete('/:id',pasajeCtrl.deletePasaje);
router.get('/:categoria', pasajeCtrl.getPasajeros);

module.exports= router;