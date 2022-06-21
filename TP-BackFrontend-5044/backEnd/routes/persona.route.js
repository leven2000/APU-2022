const personaCtrl = require('../controllers/persona.controller');

const express = require('express');
const router = express.Router();

router.get('/', personaCtrl.getPersonas);
router.post('/', personaCtrl.createPersona);
router.put('/:id', personaCtrl.putPersona);
router.delete('/:id', personaCtrl.deletePersona);


module.exports= router;