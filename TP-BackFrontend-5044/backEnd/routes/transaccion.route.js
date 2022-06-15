const transaccionCtrl = require('../controllers/transaccion.controller');

const express = require('express');
const router = express.Router();

router.get('/', transaccionCtrl.getTransaccionesDivisas);
router.post('/', transaccionCtrl.createTransaccion);
router.get('/:email', transaccionCtrl.getTransaccionesCliente);
router.get('/buscar', transaccionCtrl.getTransaccionesDivisas);

module.exports= router;