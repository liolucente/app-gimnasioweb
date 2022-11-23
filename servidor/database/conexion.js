
const mongoose= require('mongoose');
require('dotenv').config();
URL = process.env.MONGO;

const conexion = mongoose.connect(URL,{
    useNewUrlParser: true, 
    useUnifiedTopology: true, 
});

mongoose.connection.on('connected', () =>{
    console.log('Conexión Correcta');
})

mongoose.connection.on('error', () =>{
    console.log('Tenemos un error');
})

module.exports = conexion;