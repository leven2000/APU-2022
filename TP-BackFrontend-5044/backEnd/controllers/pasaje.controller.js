const Pasaje = require('../models/pasaje');
const pasajeCtrl = {};

pasajeCtrl.getPasajes = async (req , res) =>{
    var pasajes = await Pasaje.find();
    res.json(pasajes)
}

pasajeCtrl.getPasaje = async (req, res)=>{
    const pasaje = await Pasaje.find({_id: req.params.id});
    res.json(pasaje);
}


pasajeCtrl.deletePasaje = async (req, res)=>{
    try {
        await Pasaje.deleteOne({_id: req.params.id});
        res.json({
        status: '1',
        msg: 'Pasaje Borrado'
        })
    } catch (error) {
    res.status(400).json({
        'status': '0',
        'msg': 'Error Borrando Pasaje'
        })
    }
}


pasajeCtrl.createPasaje = async (req, res) =>{
    var pasaje = new Pasaje(req.body);
    try {
        await pasaje.save();
        res.json({
            'satus': '1',
            'msg': 'Pasaje guardado'
        })
    }
    catch (error){
        res.status(400).json({
            'satus': '0',
            'msg': 'Error al Guardar'
        })
    }
}


pasajeCtrl.editPasaje = async (req, res) => {
    const pasaje = new Pasaje(req.body);
    try {
        await Pasaje.updateOne({_id: req.params.id}, pasaje);
        res.json(req.params.id)
    }
    catch (error){
        res.status(400).json({
            'status': '0',
            'msg': 'Error al Editar Pasaje'
        })
    }
}



pasajeCtrl.getPasajeros = async (req, res)=>{
    var pasajeros = await Pasaje.find({'categoriaPasajero': req.params.categoria}).populate('pasajero');
    res.json(pasajeros)
}

module.exports = pasajeCtrl;