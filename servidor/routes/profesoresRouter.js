const {Router} = require('express');
const router = Router();
const {traerProfesores,altaProfesores,buscarUno,actualizarProfesor,borrarProfesor} = require('../controllers/profesoresController');



//Formularios de profesores
router.get('/', traerProfesores);
router.delete('/:id', borrarProfesor);


router.get('/:id', buscarUno);
router.post('/',altaProfesores)
router.post('/actualizar/:id', actualizarProfesor);

module.exports = router;