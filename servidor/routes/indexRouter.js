const {Router} = require('express');
const router = Router();
const {indexController} = require('../controllers/indexController');


//Router para imprimir la Home
router.get('/', indexController);


module.exports = router;