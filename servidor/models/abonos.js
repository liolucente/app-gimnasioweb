const mongoose=require('mongoose');
const {Schema}=require('mongoose');

Date.prototype.addDays = function(days) {
    var date = new Date(this.valueOf());
    date.setDate(date.getDate() + days);
    return date;
}

var date = new Date();

const abonosSchema=new Schema({
    dni:{
        type:'number',
    },    
    nombre:{
        type:'string',
    },
    apellido:{
        type:'string',
    },
    email:{
        type:'string',
    },
    disciplina:{
        type:'string',
    },
    importe:{
        type:'number',
    },
    fechaDesde:{
        type:'date',
    },
    fechaHasta:{
        type:'date',
        default: date.addDays(30)
    },
    timestamp:{
        type: 'Date',
        default: new Date()
    },
})

const Abonos = mongoose.model('abonos', abonosSchema)

module.exports = Abonos; 