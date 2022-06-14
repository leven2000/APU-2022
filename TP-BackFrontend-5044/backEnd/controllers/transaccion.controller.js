const Transaccion = require('../models/transaccion');
const transaccionCtrl = {};

transaccionCtrl.getTransacciones = async (req , res) =>{
    var transacciones = await Transaccion.find();
    res.json(transacciones)
}

transaccionCtrl.createTransaccion = async (req, res) =>{
    var transaccion = new Transaccion(req.body);
    try {
        await transaccion.save();
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

module.exports = transaccionCtrl;