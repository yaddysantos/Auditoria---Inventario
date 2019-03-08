let express = require('express');
let router = express.Router();

let c5 = require('../models/formularioc5');

router.get('/c5', (req, res,next) =>{
     res.render('auditor/C5', {});
});

//registrat el formulario
router.post('/c5', (req, res, next) => {
  console.log(req.body);  

  if (req.body._id === "") {
    let C5 = new c5({
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
     pregunta14s: req.body.pregunta14s,
     pregunta15s: req.body.pregunta15s,
     pregunta16s: req.body.pregunta16s,
     pregunta17s: req.body.pregunta17s,
     pregunta18s: req.body.pregunta18s,
     pregunta19s: req.body.pregunta19s,
     docs: req.body.docs,
     totalss: req.body.totalss,
     totalns: req.body.totalns,
     totalnss: req.body.totalnss
    });
    
    C5.save();
  } else {    
    console.log(req.body._id);
    formularioc5s.findByIdAndUpdate(req.body._id, { $set: req.body }, { new: true}, (err, model) => {
      if (err) throw err;
    });
  }
  res.redirect('/c6');
});

module.exports = router;