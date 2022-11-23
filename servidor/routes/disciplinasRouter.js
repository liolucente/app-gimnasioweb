const {Router} = require('express');
const router = Router();
const {traerDisciplinas,altaDisciplinas,actualizarDisciplina,borrarDisciplina,buscarUno} = require('../controllers/disciplinasController');


router.get('/', traerDisciplinas);
router.post('/',altaDisciplinas)

router.get('/:id', buscarUno);
router.post('actualizar/:id',actualizarDisciplina)
router.delete('/:id', borrarDisciplina);

module.exports = router;