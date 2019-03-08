let express = require('express');
let router = express.Router();

let cliente = require('../models/cliente');

router.get('/cliente', (req, res,next) =>{
  res.render('auditor/cliente',{});
});

//registrat el formulario
router.post('/coperar', (req, res, next) => {
  console.log(req.body);  

  if (req.body._id === "") {
    let cl = new cliente({
     nits: req.body.nits,
     nombres: req.body.nombres,
     gerentes: req.body.gerentes,
     direcciones: req.body.direcciones,
     telefonos: req.body.telefonos
    });
    
    cl.save();
  } else {    
    console.log(req.body._id);
    clientes.findByIdAndUpdate(req.body._id, { $set: req.body }, { new: true}, (err, model) => {
      if (err) throw err;
    });
  }
  res.redirect('/');
});

module.exports = router;