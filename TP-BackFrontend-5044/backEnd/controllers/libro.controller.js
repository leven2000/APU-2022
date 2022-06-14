const Libro = require('../models/libro');
const libroCtrl = {};

libroCtrl.getLibros = async (req , res) =>{
    var libros = await Libro.find();
    res.json(libros)
}

libroCtrl.createLibro = async (req, res) =>{
    var libro = new Libro(req.body);
    try {
        await libro.save();
        res.json({
            'satus': '1',
            'msg': 'Libro guardado'
        })
    }
    catch (error){
        res.status(400).json({
            'satus': '0',
            'msg': 'Error al Guardar'
        })
    }
}

libroCtrl.editLibro = async (req, res) => {
    const libro = new Libro(req.body);
    try {
        await Libro.updateOne({_id: req.body._id}, libro);
        res.json({
            'status': '1',
            'msg': 'Libro editado con exito'
        })
    }
    catch (error){
        res.status(400).json({
            'status': '0',
            'msg': 'Error al Editar libro'
        })
    }
}

libroCtrl.deleteLibro = async (req, res)=>{
    try {
        await Libro.deleteOne({_id: req.params.id});
        res.json({
        status: '1',
        msg: 'Libro Borrado'
        })
    } catch (error) {
    res.status(400).json({
        'status': '0',
        'msg': 'Error Borrando Libro'
        })
    }
}



module.exports = libroCtrl;