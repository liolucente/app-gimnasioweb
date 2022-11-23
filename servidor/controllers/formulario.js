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
            return await Profesores.create(profesores)
        } catch (error) {
            throw error;
        }        
    }

}

module.exports = new ProfesoresControllers;