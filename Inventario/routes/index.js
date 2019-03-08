var express = require('express');
var router = express.Router();

router.get('/', (req, res,next) =>{
     res.render('index');
});


router.get('/formulario/c5', (req, res,next) =>{
     res.render('auditor/C5', {});
});

router.get('/formulario/c6', (req, res,next) =>{
     res.render('auditor/C6', {});
});
module.exports = router;
