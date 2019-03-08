var express = require('express');
var router = express.Router();

router.get('/', (req, res,next) =>{
     res.render('index');
});

router.get('/msj', (req, res,next) =>{
     res.render('auditor/mensaje', {});
});


module.exports = router;
