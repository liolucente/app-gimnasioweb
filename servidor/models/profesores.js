const mongoose=require('mongoose');
const {Schema}=require('mongoose');

const profesoresSchema=new Schema({
    nombre:{
        type:'string',
    },
    apellido:{
        type:'string',
    },
    dni:{
        type:'number',
    },
    email:{
        type:'string',
    },    
    timestamp:{
        type: 'Date',
        default: new Date()
    },
})

const Profesores = mongoose.model('profesores', profesoresSchema)

module.exports = Profesores; 