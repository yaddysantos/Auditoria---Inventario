var express = require('express');
var router = express.Router();
var controllers = require('../controllers')

router.get('/', controllers.HomeController.index);

//ruta usuario

router.get('/auth/signup', controllers.usecontrollers.getSignUp);

module.exports = router;
