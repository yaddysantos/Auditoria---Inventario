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
    cliente.findByIdAndUpdate(req.body._id, { $set: req.body }, { new: true}, (err, model) => {
      if (err) throw err;
    });
  }
  res.redirect('/');
});

router.get('/clientet', (req, res,next) =>{
  cliente.find((err, clientes) =>{
       if(err) throw err;
       res.render('auditor/clientet', {clientes: clientes});
  });
});

router.get('/modificar/:id', (req, res, next) =>{
  let idcliente = req.params.id;
  cliente.findOne({_id: idcliente}, (err, clientes) =>{
       if(err) throw err;
       res.render('auditor/cliente', {clientes: clientes})
  });
});

router.get('/eliminar/:id', (req, res, next) =>{
  let idcliente = req.params.id;
  cliente.remove({_id: idcliente}, (err) =>{
       res.redirect('/clientet');
  })
})

module.exports = router;