var express = require('express');
var passport = require('passport');
var router = express.Router();

let auditor = require('../models/auditor');

router.get('/registro', (req, res,next) =>{
     res.render('auditor/nuevoa',{});
});

router.get('/login', (req, res,next) =>{
     res.render('auditor/sesion',{});
});

router.post('/login', passport.authenticate('local', {
     successRedirect: '/registro',
     failureRedirect: '/index',
     failureFlash: true
}));

router.post('/operar', (req, res, next) => {
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
res.redirect('/Login');
});
   
module.exports = router;