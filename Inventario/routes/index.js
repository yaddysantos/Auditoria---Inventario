var express = require('express');
var router = express.Router();

router.get('/', (req, res,next) =>{
     res.render('index');
});

router.get('/formulario/c1', (req, res,next) =>{
     res.render('auditor/C1', {});
});

router.get('/formulario/c2', (req, res,next) =>{
     res.render('auditor/C2', {});
});

router.get('/formulario/c3', (req, res,next) =>{
     res.render('auditor/C3', {});
});

router.get('/formulario/c4', (req, res,next) =>{
     res.render('auditor/C4', {});
});

router.get('/formulario/c5', (req, res,next) =>{
     res.render('auditor/C5', {});
});

router.get('/formulario/c6', (req, res,next) =>{
     res.render('auditor/C6', {});
});
module.exports = router;
