const Persona = require('../models/persona');

class PersonaControllers{

    async findAll(){
        try {
            return await Persona.find()
        } catch (error) {
            throw error;
        }
    }

    async create(persona){
        try {
            return await Persona.create(persona)
        } catch (error) {
            throw error;
        }        
    }

}

module.exports = new PersonaControllers;