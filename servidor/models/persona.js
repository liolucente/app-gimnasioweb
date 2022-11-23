const mongoose=require('mongoose');
const {Schema}=require('mongoose');

const personaSchema=new Schema({
    name:{
        type:'string',
    },
    email:{
        type:'string',
    },
    direccion:{
        type:'string',
    },
    edad:{
        type:'number',
    },
    timestamp:{
        type: 'Date',
        default: new Date()
    },
})

const Persona = mongoose.model('personas', personaSchema)

module.exports = Persona; 