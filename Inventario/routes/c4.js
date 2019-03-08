let express = require('express');
let router = express.Router();

let c4 = require('../models/formularioc4');

router.get('/c4', (req, res,next) =>{
     res.render('auditor/C4', {});
});

//registrat el formulario
router.post('/c4', (req, res, next) => {
  console.log(req.body);  

  if (req.body._id === "") {
    let C4 = new c4({
     clientes: req.body.clientes,
     pregunta1s: req.body.pregunta1s,
     pregunta2s: req.body.pregunta2s,
     pregunta3s: req.body.pregunta3s,
     pregunta4s: req.body.pregunta4s,
     pregunta5s: req.body.pregunta5s,
     pregunta6s: req.body.pregunta6s,
     pregunta7s: req.body.pregunta7s,
     docs: req.body.docs,
     totalss: req.body.totalss,
     totalns: req.body.totalns,
     totalnss: req.body.totalnss
    });
    
    C4.save();
  } else {    
    console.log(req.body._id);
    formularioc4s.findByIdAndUpdate(req.body._id, { $set: req.body }, { new: true}, (err, model) => {
      if (err) throw err;
    });
  }
  res.redirect('/c5');
});

module.exports = router;