let express = require('express');
let router = express.Router();

let mongoose = require('./../Conexion/connect');
let auditor = require('./../models/auditor');

//loggear usuario

router.post('/', (req, res) =>{
    var cedulas = req.body.cedulas;
    var claves = req.body.claves;

    auditor.findOne({cedulas: cedulas, claves: claves}, (err, user) => {
      if(err){
        console.log(err);
      }    
      
      if(user){
        return res.status(404).send();
      }

      return res.status(200).send();
    })
});

//registrat el formulario
router.post('/auditor/operar', (req, res, next) => {
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