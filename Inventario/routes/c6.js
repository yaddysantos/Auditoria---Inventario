let express = require('express');
let router = express.Router();

let c6 = require('../models/formularioc6');

router.get('/c6', (req, res,next) =>{
     res.render('auditor/C6', {});
});

//registrat el formulario
router.post('/c6', (req, res, next) => {
  console.log(req.body);  

  if (req.body._id === "") {
    let C6 = new c6({
     clientes: req.body.clientes,
     pregunta1s: req.body.pregunta1s,
     pregunta2s: req.body.pregunta2s,
     pregunta3s: req.body.pregunta3s,
     pregunta4s: req.body.pregunta4s,
     pregunta5s: req.body.pregunta5s,
     pregunta6s: req.body.pregunta6s,
     docs: req.body.docs,
     totalss: req.body.totalss,
     totalns: req.body.totalns,
     totalnss: req.body.totalnss
    });
    
    C6.save();
  } else {    
    console.log(req.body._id);
    c6.findByIdAndUpdate(req.body._id, { $set: req.body }, { new: true}, (err, model) => {
      if (err) throw err;
    });
  }
  res.redirect('/msj');
});

module.exports = router;