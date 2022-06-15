const libroCtrl = require('./../controllers/libro.controller');

const express = require('express');
const router = express.Router();

router.get('/', libroCtrl.getLibros);
router.get('/destacados', libroCtrl.getDestacados);
router.post('/', libroCtrl.createLibro);
router.put('/:id', libroCtrl.editLibro);
router.delete('/:id', libroCtrl.deleteLibro);

module.exports= router;