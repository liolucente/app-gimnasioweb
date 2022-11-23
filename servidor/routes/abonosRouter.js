const {Router} = require('express');
const router = Router();
const {traerAbonos,registroAbonos,buscarFecha} = require('../controllers/abonosController');

const fechaBase = new Date();

router.get('/', traerAbonos);
router.post('/', registroAbonos);



module.exports = router;