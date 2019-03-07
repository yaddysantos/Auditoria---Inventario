var express = require('express');
var router = express.Router();

router.get('auditor/registro', (req, res,next) =>{
     res.render('auditor/nuevoa',{});
});

router.get('auditor/login', (req, res,next) =>{
     res.render('auditor/sesion',{});
});

module.exports = router;