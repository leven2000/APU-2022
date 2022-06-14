const mongoose = require('mongoose');
const {Schema} = mongoose;

const LibroSchema = new Schema({
    libro: {type: String, required: true},
    descripcion: {type: String, required: true},
    imagen: {type: String, required: true},
    stock: {type: String, required: true},
    destacado: {type: Boolean, required: true}
})

module.exports = mongoose.models.Libro || mongoose.model('Libro', LibroSchema)