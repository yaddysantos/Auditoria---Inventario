var express = require('express');
var router = express.Router();


let formulario5 = require('../models/formularioc5');


router.get('/tabla5', (req, res,next) =>{
     formulario5.find((err, formularioc5s) =>{
          if(err) throw err;
          res.render('auditor/tabla5', {formularioc5s: formularioc5s});
     });
});

router.get('/tabla5/modificar/:id', (req, res, next) =>{
     let idformulario5 = req.params.id;
     formulario5.findOne({_id: idformulario5}, (err, formularioc5s) =>{
          if(err) throw err;
          res.render('auditor/C5', {formularioc5s: formularioc5s})
     });
});

router.get('/tabla5/eliminar/:id', (req, res, next) =>{
     let idformulario5 = req.params.id;
     formulario5.remove({_id: idformulario5}, (err) =>{
          res.redirect('/tabla5');
     })
});

module.exports = router