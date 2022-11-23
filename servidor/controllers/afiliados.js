const Afiliados = require('../models/afiliados');

class AfiliadosControllers{

    async findAll(){
        try {
            return await Afiliados.find()
        } catch (error) {
            throw error;
        }
    } 

    async create(afiliados){
        try {
            return await Afiliados.create(afiliados)
        } catch (error) {
            throw error;
        }        
    }

    async buscarAfiliado(id){
        const buscado = await Afiliados.findById(id)
        return buscado;
    }

    async modificarAfiliado(id, afiliados){
        const actualizado = await Afiliados.findByIdAndUpdate(id, afiliados);
        return actualizado;
    }

    async eliminarAfiliado(id){
        await Afiliados.findByIdAndDelete(id)
    }    

}

module.exports = new AfiliadosControllers;