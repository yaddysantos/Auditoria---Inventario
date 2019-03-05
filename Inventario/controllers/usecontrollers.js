var mysql = require('mysql');

module.exports = {
     
     getSignUp : function (rep, res, next) {
          return res.render('auth/signup')
     }
}