var express = require('express');
var router = express.Router();

let mongoose = require('./../Conexion/connect');
let auditor = require('./../models/auditor');

router.get('/', (req, res,next) =>{
     res.render('index');
});

router.get('/auditor/nuevo', (req, res,next) =>{
     res.render('auditor/nuevoa', {});
});
module.exports = router;
