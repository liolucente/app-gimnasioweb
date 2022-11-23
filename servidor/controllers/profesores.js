const Profesores = require('../models/profesores');

class ProfesoresControllers{

    async findAll(){
        try {
            return await Profesores.find()
        } catch (error) {
            throw error;
        }
    }

    async create(profesores){
        try {
            await Profesores.create(profesores)
        } catch (error) {
            throw error;
        }        
    }

    async getProfesor(id){
        const buscado = await Profesores.findById(id)
        return buscado;
    }

    async updateProfesor(id, profesores){
        const actualizado = await Profesores.findByIdAndUpdate(id, profesores);
        return actualizado;
    }

    async deleteProfesor(id){
        await Profesores.findByIdAndDelete(id)
    }    

}

module.exports = new ProfesoresControllers;