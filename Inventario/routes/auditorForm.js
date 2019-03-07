let express = require('express');
let router = express.Router();

let auditor = require('../models/auditor');

//registrat el formulario
router.post('/auditor', (req, res, next) => {
  console.log(req.body);  

  if (req.body._id === "") {
    let au = new auditor({
     cedulas: req.body.cedulas,
     nombres: req.body.nombres,
     apellidos: req.body.apellidos,
     correos: req.body.correos,
     telefonos: req.body.telefonos,
     claves: req.body.claves
    });
    
    au.save();
  } else {    
    console.log(req.body._id);
    auditor.findByIdAndUpdate(req.body._id, { $set: req.body }, { new: true}, (err, model) => {
      if (err) throw err;
    });
  }
  res.redirect('/');
});

module.exports = router;