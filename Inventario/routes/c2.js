let express = require('express');
let router = express.Router();

let c2 = require('../models/formularioc2');

router.get('/c2', (req, res,next) =>{
     res.render('auditor/C2', {});
});

//registrat el formulario
router.post('/c2', (req, res, next) => {
  console.log(req.body);  

  if (req.body._id === "") {
    let C2 = new c2({
     clientes: req.body.clientes,
     pregunta1s: req.body.pregunta1s,
     pregunta2s: req.body.pregunta2s,
     pregunta3s: req.body.pregunta3s,
     pregunta4s: req.body.pregunta4s,
     pregunta5s: req.body.pregunta5s,
     docs: req.body.docs,
     totalss: req.body.totalss,
     totalns: req.body.totalns,
     totalnss: req.body.totalnss
    }, {versionKey: false});
    
    C2.save();
  } else {    
    console.log(req.body._id);
    formularioc2s.findByIdAndUpdate(req.body._id, { $set: req.body }, { new: true}, (err, model) => {
      if (err) throw err;
    });
  }
  res.redirect('/formulario/c3');
});

module.exports = router;