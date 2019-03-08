let express = require('express');
let router = express.Router();

let c1 = require('../models/formularioc1');

router.get('/c1', (req, res,next) =>{
     res.render('auditor/C1', {});
});

//registrat el formulario
router.post('/c1', (req, res, next) => {
  console.log(req.body);  

  if (req.body._id === "") {
    let C1 = new c1({
     clientes: req.body.clientes,
     pregunta1s: req.body.pregunta1s,
     pregunta2s: req.body.pregunta2s,
     pregunta3s: req.body.pregunta3s,
     pregunta4s: req.body.pregunta4s,
     pregunta5s: req.body.pregunta5s,
     pregunta6s: req.body.pregunta6s,
     pregunta7s: req.body.pregunta7s,
     pregunta8s: req.body.pregunta8s,
     pregunta9s: req.body.pregunta9s,
     pregunta10s: req.body.pregunta10s,
     pregunta11s: req.body.pregunta11s,
     pregunta12s: req.body.pregunta12s,
     pregunta13s: req.body.pregunta13s,
     docs: req.body.docs,
     totalss: req.body.totalss,
     totalns: req.body.totalns,
     totalnss: req.body.totalnss
    });
    
    C1.save();
  } else {    
    console.log(req.body._id);
    formularioc1s.findByIdAndUpdate(req.body._id, { $set: req.body }, { new: true}, (err, model) => {
      if (err) throw err;
    });
  }
  res.redirect('/c2');
});

module.exports = router;