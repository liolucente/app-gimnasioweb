const {Router} = require('express');
const router = Router();
const {traerAfiliados,altaAfiliados,buscarUno,actualizarAfiliado,borrarAfiliado} = require('../controllers/afiliadosController');


router.get('/', traerAfiliados);
router.post('/',altaAfiliados)

router.get('/modiAfiliados',traerAfiliados)
router.post('/modiAfiliados',traerAfiliados)

router.get('/:id', buscarUno);
router.post('/actualizar/:id',actualizarAfiliado)
router.delete('/:id', borrarAfiliado);



module.exports = router;