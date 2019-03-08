var express = require('express');
var router = express.Router();


let formulario6 = require('../models/formularioc6');


router.get('/tabla6', (req, res,next) =>{
     formulario6.find((err, formularioc6s) =>{
          if(err) throw err;
          res.render('auditor/tabla6', {formularioc6s: formularioc6s});
     });
});

router.get('/tabla6/modificar/:id', (req, res, next) =>{
     let idformulario6 = req.params.id;
     formulario6.findOne({_id: idformulario6}, (err, formularioc6s) =>{
          if(err) throw err;
          res.render('auditor/C6editado', {formularioc6s: formularioc6s})
     });
});

router.get('/tabla6/eliminar/:id', (req, res, next) =>{
     let idformulario6 = req.params.id;
     formulario6.remove({_id: idformulario6}, (err) =>{
          res.redirect('/tabla6');
     })
})

module.exports = router