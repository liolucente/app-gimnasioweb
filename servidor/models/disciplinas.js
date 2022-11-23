const mongoose=require('mongoose');
const {Schema}=require('mongoose');

const disciplinasSchema=new Schema({
    item:{
        type:'number',
    },
    texto:{
        type:'string',
    },    
    timestamp:{
        type: 'Date',
        default: new Date()
    },
})

const Disciplinas = mongoose.model('disciplinas', disciplinasSchema)

module.exports = Disciplinas; 