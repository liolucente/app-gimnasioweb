const {Router} = require('express');
const router = Router();
const {altaProfesores} = require('../controllers/formularioController');


router.post('/',altaProfesores)



module.exports = router;