var express = require('express');
var router = express.Router();
var controllers = require('.././controllers')

router.get('/', controllers.HomeController.index);

//ruta usuario

router.post('/auth/signup', controllers.usecontrollers.getSignUp);
router.get('/auth/signup', controllers.usecontrollers.postSignUp);

module.exports = router;
