const express = require('express');
const dotenv = require('dotenv').config();
const cors = require('cors');
require('./database/conexion');
const app = express();
const PORT = process.env.PORT || 3001;

app.use(express.json());
app.use(express.urlencoded({extended: true}));

app.use(cors());


app.use(function (req, res, next) {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers', true);
    res.header('Access-Control-Allow-Credentials', 'Content-Type');
    res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
    next();
});


//Variables de rutas
const indexRouter = require('./routes/indexRouter');
const profesoresRouter = require('./routes/profesoresRouter');
const disciplinasRouter = require('./routes/disciplinasRouter');
const afiliadosRouter = require('./routes/afiliadosRouter');
const abonosRouter = require('./routes/abonosRouter');
const abonosVencimientosRouter = require('./routes/abonosVencimientosRouter');
const formularioRouter = require('./routes/formularioRouter');


//Routers
app.use('/',indexRouter)
app.use('/home', indexRouter);
app.use('/formulario',formularioRouter)


app.use('/profesores', profesoresRouter);
app.use('/altaprofesores', profesoresRouter);

app.use('/altaAfiliados', afiliadosRouter);
app.use('/modiAfiliados', afiliadosRouter);

app.use('/altaDisciplinas', disciplinasRouter);
app.use('/modiDisciplinas', disciplinasRouter);

app.use('/registroAbonos', abonosRouter);
app.use('/vencimientoAbonos', abonosVencimientosRouter);



app.listen(PORT,()=>{
    console.log(`Servidor corriendo en el puerto: ${PORT}`);
})