const mongoose=require('mongoose');
const {Schema}=require('mongoose');

const afiliadosSchema=new Schema({
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

const Afiliados = mongoose.model('afiliados', afiliadosSchema)

module.exports = Afiliados; 