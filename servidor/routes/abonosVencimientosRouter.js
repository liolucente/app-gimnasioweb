const {Router} = require('express');
const router = Router();
const {traerAbonos,buscarFecha} = require('../controllers/abonosController');

const fechaBase = new Date();

router.get('/', traerAbonos);
router.post('/', buscarFecha);



module.exports = router;