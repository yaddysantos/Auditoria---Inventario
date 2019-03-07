var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var exphbs = require('express-handlebars');
var methodOverrie = require('method-override');
var session = require('express-session');
var passport = require('passport');
var LocalStrategy = require('passport-local');
var flash = require('connect-flash');


//Iniicilizaciones
var app = express();
require('./../Inventario/Conexion/connect');
require('./../Inventario/Config/passport');

//ajustes del puertoo
app.set('port', process.env.PORT || 3000);
app.set('views', path.join(__dirname, 'views'));
app.engine('.hbs', exphbs({
     defaultLayout: 'contenedor',
     layoutsDir: path.join(app.get('views'),'contenedor'),
     partialsDir: path.join(app.get('views'), 'partials'),
     extname : '.hbs' 
}));
// para poder configurar el motor de plantillas
app.set('view engine', '.hbs');

//Middlewares
/*
Sirve para recibir los datos al momento de registrase el usuario, la opción extended es para que solo se reciba información mas no imagenes del usuario.
*/
app.use(express.urlencoded({extended: false}));
/*
El metodo override sirve para que los formularios acepten otros metodos aparte
del set y el get como por ejemplos los metodos put y delete
*/
app.use(methodOverrie('_method'));
app.use(session({
     secret: 'mysecretapp',
     resave: true,
     saveUninitialized: true
}));

app.use(passport.initialize());
app.use(passport.session());
app.use(flash());

//globall
app.use((req, res, next) =>{
     res.locals.success_msg = req.flash('success_msg');
     res.locals.error_msg = req.flash('error_msg');
     res.locals.error_msg = req.flash('error');
     next();
});

//Routas
app.use(require('../Inventario/routes/index'));
app.use(require('../Inventario/routes/registro'));
app.use(require('../Inventario/routes/cliente'));

//Archivos estaticos

app.use(express.static(path.join(__dirname, 'public')));

//Iniciar el servidor
app.listen(app.get('port'), () =>{
     console.log('Servidor prendido');
});


// var index = require('./routes/index');
// var auditorForm = require('./routes/auditorForm');
// var app = express();

// // view engine setup
// app.set('views', path.join(__dirname, 'views'));
// app.set('view engine', 'hbs');

// app.use(logger('dev'));
// app.use(express.json());
// app.use(express.urlencoded({ extended: false }));
// app.use(cookieParser());
// app.use(express.static(path.join(__dirname, 'public')));

// app.use('/', index);
// app.use('/auditorForm', auditorForm);

// // catch 404 and forward to error handler
// app.use(function(req, res, next) {
//   next(createError(404));
// });

// // error handler
// app.use(function(err, req, res, next) {
//   // set locals, only providing error in development
//   res.locals.message = err.message;
//   res.locals.error = req.app.get('env') === 'development' ? err : {};

//   // render the error page
//   res.status(err.status || 500);
//   res.render('error');
// });

//module.exports = app;
