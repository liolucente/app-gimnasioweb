const ProfesoresControllers = require('./profesores')

/* Controlador para imprimir el Home */
const traerProfesores = async (req, res) =>{
    res.json({
        profesores: await ProfesoresControllers.findAll()
    });
}


const altaProfesores = async (req, res) =>{
    await ProfesoresControllers.create(req.body)
    res.json('profesor Creado!!')
}


const buscarUno = async (req, res) => {
    const { 
        params: { id }
    } = req;    
    res.json({
        profesor: await ProfesoresControllers.getProfesor(id)
    });

}

const actualizarProfesor = async (req, res) => {
    const { 
        body,
        params: { id }
    } = req;
    const profesor = await ProfesoresControllers.updateProfesor(id, body);
    res.json('Profesor Actualizado');
}

const borrarProfesor = async (req, res) => {
    const { 
        params: { id }
    } = req;
    await ProfesoresControllers.deleteProfesor(id);
    res.json({
        mensaje: 'Profesor eliminado'
    });
}

module.exports = {traerProfesores,altaProfesores,buscarUno,actualizarProfesor,borrarProfesor};