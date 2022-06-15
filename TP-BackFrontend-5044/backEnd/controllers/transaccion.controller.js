const Transaccion = require('../models/transaccion');
const transaccionCtrl = {};

transaccionCtrl.getTransacciones = async (req , res) =>{
    var transacciones = await Transaccion.find();
    res.json(transacciones)
}

transaccionCtrl.getTransaccionesCliente = async (req, res) =>{
    const email = req.params.email;
    var transaccionesCliente = await Transaccion.find({'emailCliente': email });
    res.json(transaccionesCliente)
}

transaccionCtrl.getTransaccionesDivisas = async (req, res) =>{
    let origen = req.query.origen;
    let destino = req.query.destino;

    var transacciones = await Transaccion.find({'monedaOrigen': origen, 'monedaDestino': destino});
    res.json(transacciones)
}


transaccionCtrl.createTransaccion = async (req, res) =>{
    var transaccion = new Transaccion(req.body);
    try {
        await transaccion.save();
        res.json({
            'satus': '1',
            'msg': 'Transaccion guardada'
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