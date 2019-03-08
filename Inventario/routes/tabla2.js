var express = require('express');
var router = express.Router();


let formulario2 = require('../models/formularioc2');


router.get('/tabla2', (req, res,next) =>{
     formulario2.find((err, formularioc2s) =>{
          if(err) throw err;
          res.render('auditor/tabla2', {formularioc2s: formularioc2s});
     });
});

router.get('/tabla2/modificar/:id', (req, res, next) =>{
     let idformulario2 = req.params.id;
     formulario2.findOne({_id: idformulario2}, (err, formularioc2s) =>{
          if(err) throw err;
          res.render('auditor/C2editado', {formularioc2s: formularioc2s})
     });
});

router.get('/tabla2/eliminar/:id', (req, res, next) =>{
     let idformulario2 = req.params.id;
     formulario2.remove({_id: idformulario2}, (err) =>{
          res.redirect('/tabla2');
     })
})

module.exports = router