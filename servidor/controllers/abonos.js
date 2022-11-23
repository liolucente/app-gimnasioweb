const Abonos = require('../models/abonos');

class AbonosControllers{

    async findAll(){
        try {
            return await Abonos.find()
        } catch (error) {
            throw error;
        }
    }

    async create(abonos){
        try {
            return await Abonos.create(abonos)
        } catch (error) {
            throw error;
        }        
    }

    async buscarFecha(fecha){
        try {
            return await Abonos.find({fechaHasta:{$gte:fecha}})
        } catch (error) {
            throw error;
        }
    }    

}

module.exports = new AbonosControllers;