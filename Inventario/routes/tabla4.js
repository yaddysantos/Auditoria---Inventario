var express = require('express');
var router = express.Router();


let formulario4 = require('../models/formularioc4');


router.get('/tabla4', (req, res,next) =>{
     formulario4.find((err, formularioc4s) =>{
          if(err) throw err;
          res.render('auditor/tabla4', {formularioc4s: formularioc4s});
     });
});

router.get('/tabla4/modificar/:id', (req, res, next) =>{
     let idformulario4 = req.params.id;
     formulario4.findOne({_id: idformulario4}, (err, formularioc4s) =>{
          if(err) throw err;
          res.render('auditor/C4editado', {formularioc4s: formularioc4s})
     });
});

router.get('/tabla4/eliminar/:id', (req, res, next) =>{
     let idformulario4 = req.params.id;
     formulario4.remove({_id: idformulario4}, (err) =>{
          res.redirect('/tabla4');
     })
})

module.exports = router