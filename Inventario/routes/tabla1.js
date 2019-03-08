var express = require('express');
var router = express.Router();

let formulario1 = require('../models/formularioc1');


router.get('/tabla1', (req, res,next) =>{
     formulario1.find((err, formularioc1s) =>{
          if(err) throw err;
          res.render('auditor/tabla1', {formularioc1s: formularioc1s});
     });
});

router.get('/tabla1/modificar/:id', (req, res, next) =>{
     let idformulario1 = req.params.id;
     formulario1.findOne({_id: idformulario1}, (err, formularioc1s) =>{
          if(err) throw err;
          res.render('auditor/C1editado', {formularioc1s: formularioc1s})
     });
});

router.get('/tabla1/eliminar/:id', (req, res, next) =>{
     let idformulario1 = req.params.id;
     formulario1.remove({_id: idformulario1}, (err) =>{
          res.redirect('/tabla1');
     })
})



module.exports = router