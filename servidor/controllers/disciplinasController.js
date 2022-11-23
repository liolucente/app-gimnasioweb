const DisciplinasControllers = require('./disciplinas')


const traerDisciplinas = async (req, res) =>{
    res.json({
        disciplinas: await DisciplinasControllers.findAll()
    });
}

const altaDisciplinas = async (req, res) =>{
    await DisciplinasControllers.create(req.body);
    res.json('Disciplina creada!!')
}

const buscarUno = async (req, res) => {
    const { 
        params: { id }
    } = req;    
    res.json({
        disciplina: await DisciplinasControllers.buscarDisciplina(id)
    });
}

const actualizarDisciplina = async (req, res) => {
    const { 
        body,
        params: { id }
    } = req;
    const disciplinas = await DisciplinasControllers.modificarDisciplina(id, body);
    res.json('¡Disciplina Actualizada');
}

const borrarDisciplina = async (req, res) => {
    const { 
        params: { id }
    } = req;
    await DisciplinasControllers.eliminarDisciplina(id);
    res.json({
        mensaje: '¡Disciplina eliminada!'
    });
}

module.exports = {traerDisciplinas,altaDisciplinas,buscarUno,actualizarDisciplina,borrarDisciplina};