const transaccionCtrl = require('../controllers/transaccion.controller');

const express = require('express');
const router = express.Router();

router.get('/', transaccionCtrl.getTransacciones);
router.post('/', transaccionCtrl.getTransacciones);
//router.get('/:email', transaccionCtrl.getTransaccionesCliente);
//router.get('/:divisa', transaccionCtrl.getTransaccionesDivisas);

module.exports= router;