var passport = require('passport');
var LocalStrategy = require('passport-local').Strategy;
let auditors = require('../models/auditor');
//let cliente = require('../models/cliente');

passport.use(new LocalStrategy({
     usernameField: 'cedulas'
     }, (cedulas, claves, done) =>{
          let au = auditors.findOne({cedulas: cedulas});
          if(!au)
          {
               return done(null, false);
          }
          else{
              const cla = au.matchPassword(claves);
              if(cla){
                    return done(null, user);
              }else{
                   return done(null, false, {text: `clave incorrecta`});
              }
          }
     }
));

passport.serializeUser((au, done) =>{
     done(null, au._id);
});

passport.deserializeUser((_id, done) =>{
     auditors.findById(_id, (err,au) =>{
          done(err, au);
     });
});