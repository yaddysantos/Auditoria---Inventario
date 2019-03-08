var express = require('express');
var router = express.Router();


let formulario3 = require('../models/formularioc3');


router.get('/tabla3', (req, res,next) =>{
     formulario3.find((err, formularioc3s) =>{
          if(err) throw err;
          res.render('auditor/tabla3', {formularioc3s: formularioc3s});
     });
});

router.get('/tabla3/modificar/:id', (req, res, next) =>{
     let idformulario3 = req.params.id;
     formulario3.findOne({_id: idformulario3}, (err, formularioc3s) =>{
          if(err) throw err;
          res.render('auditor/C3editado', {formularioc3s: formularioc3s})
     });
});

router.get('/tabla3/eliminar/:id', (req, res, next) =>{
     let idformulario3 = req.params.id;
     formulario3.remove({_id: idformulario3}, (err) =>{
          res.redirect('/tabla3');
     })
})

module.exports = router