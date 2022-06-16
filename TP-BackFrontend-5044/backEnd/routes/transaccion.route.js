const transaccionCtrl = require('../controllers/transaccion.controller');

const express = require('express');
const router = express.Router();

router.get('/', transaccionCtrl.getTransacciones);
router.post('/', transaccionCtrl.createTransaccion);
router.get('/:email', transaccionCtrl.getTransaccionesCliente);
router.get('/buscar', transaccionCtrl.getTransaccionesDivisas);

module.exports= router;