const Persona = require('../models/persona');
const personaCtrl = {};

personaCtrl.getPersonas = async (req , res) =>{
    var personas = await Persona.find();
    res.json(personas)
}

personaCtrl.createPersona = async (req, res) =>{
    var persona = new Persona(req.body);
    try {
        await persona.save();
        res.json({
            'satus': '1',
            'msg': 'Persona Guardada'
        })
    }
    catch (error){
        res.status(400).json({
            'satus': '0',
            'msg': 'Error al Guardar'
        })
    }
}
personaCtrl.putPersona = async (req, res) => {
    const persona =new Persona (req.body);
    try {
        await Persona.updateOne({_id: req.body._id}, persona);
        res.json({
            'status': '1',
            'msg': 'persona editada con exito'
        })
    }
    catch (error){
        res.status(400).json({
            'status': '0',
            'msg': 'Error al Editar libro'
        })
    }
}
personaCtrl.deletePersona = async (req, res) =>{
    try {
        await PersonadeleteOne({_id: req.params.id});
        res.json({
        status: '1',
        msg: 'Persona Borrada'
        })
    }
    catch (error){
        res.status(400).json({
            'status': '0',
            'msg': 'Error Borrando Persona'
            })
    }
}

module.exports = personaCtrl;