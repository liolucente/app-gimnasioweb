const ProfesoresControllers = require('./formulario')

/* Controlador para imprimir el Home */
const traerProfesores = async (req, res) =>{
    res.json({
        profesores: await ProfesoresControllers.findAll()
    });
}


const altaProfesores = async (req, res) =>{
    await ProfesoresControllers.create(req.body);
    res.json('profesor Creado!!')
}


module.exports = {traerProfesores,altaProfesores};