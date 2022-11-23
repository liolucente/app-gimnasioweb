const AfiliadosControllers = require('./afiliados')

/* Controlador para imprimir el Home */
const traerAfiliados = async (req, res) =>{
    /* res.render('/'); */
    res.json({
        afiliados: await AfiliadosControllers.findAll()
    });
}


const altaAfiliados = async (req, res) =>{
    const { nombre, apellido } = req.body;
    /* res.render('/'); */
    await AfiliadosControllers.create(req.body);
    res.json('Afiliado Creado!!')
}

const buscarUno = async (req, res) => {
    const { 
        params: { id }
    } = req;    
    res.json({
        afiliados: await AfiliadosControllers.buscarDisciplina(id)
    });
}

const actualizarAfiliado = async (req, res) => {
    const { 
        body,
        params: { id }
    } = req;
    const afiliados = await AfiliadosControllers.modificarDisciplina(id, body);
    res.json('Afiliado Actualizado');
}

const borrarAfiliado = async (req, res) => {
    const { 
        params: { id }
    } = req;
    await AfiliadosControllers.eliminarAfiliado(id);
    res.json({
        mensaje: 'Afiliado Eliminado!'
    });
}

module.exports = {traerAfiliados,altaAfiliados,buscarUno,actualizarAfiliado,borrarAfiliado};