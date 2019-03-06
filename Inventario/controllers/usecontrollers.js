var mysql = require('mysql');

module.exports = {
     
     getSignUp: function (req, res, next) {
          return res.render('auth/signup')
     },

     postSignUp: function (req, res, next){
          console.log(req.body.todo);
          return;
     }
}; 