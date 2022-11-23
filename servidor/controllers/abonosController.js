const AbonosControllers = require('./abonos')

const traerAbonos = async (req, res) =>{
    res.json({
        abonos: await AbonosControllers.findAll()
    });
}


const registroAbonos = async (req, res) =>{
    await AbonosControllers.create(req.body);
    res.json('Abono registrado!!')
}

const buscarFecha = async (req, res) =>{
    const { 
        fechaHasta
    } = req.body;        

    res.json({
        abonos: await AbonosControllers.buscarFecha(fechaHasta)
    });
}



module.exports = {traerAbonos,registroAbonos,buscarFecha};