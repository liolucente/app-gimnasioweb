const Disciplinas = require('../models/disciplinas');

class DisciplinasControllers{

    async findAll(){
        try {
            return await Disciplinas.find()
        } catch (error) {
            throw error;
        }
    }

    async create(disciplinas){
        try {
            return await Disciplinas.create(disciplinas)
        } catch (error) {
            throw error;
        }        
    }

    async buscarDisciplina(id){
        const buscado = await Disciplinas.findById(id)
        return buscado;
    }

    async modificarDisciplina(id, disciplinas){
        const actualizado = await Disciplinas.findByIdAndUpdate(id, disciplinas);
        return actualizado;
    }

    async eliminarDisciplina(id){
        await Disciplinas.findByIdAndDelete(id)
    }    



}

module.exports = new DisciplinasControllers;