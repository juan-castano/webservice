var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');

var routes = require('./routes/index');
var users = require('./routes/users');
var automobiles = require('./routes/automobiles');
var motorcycles = require('./routes/motorcycles');

// var users = require('./controllers/user');

var db_url = 'mongodb://127.0.0.1/parkinguc_server';

var app = express();

var dia = new Date().getUTCDate();
var mes = new Date().getUTCMonth();
var anio = new Date().getUTCFullYear();

// Formato Fecha
// dd-mm-yyyy

var fecha = dia + "-" + mes + "-" + anio;

app.listen(5000);
console.log("Escuchando puerto: 5000");
console.log("Dia: " + fecha );
// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

// uncomment after placing your favicon in /public
//app.use(favicon(__dirname + '/public/favicon.ico'));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', routes);
app.use('/users', users);
app.use('/automobiles', automobiles);
app.use('/motorcycles', motorcycles);

/* ***************************************** */
// app.get('/')
/* ***************************************** */


// catch 404 and forward to error handler
app.use(function(req, res, next) {
    var err = new Error('Not Found');
    err.status = 404;
    next(err);
});

// error handlers

// development error handler
// will print stacktrace
if (app.get('env') === 'development') {
    app.use(function(err, req, res, next) {
        res.status(err.status || 500);
        res.render('error', {
            message: err.message,
            error: err
        });
    });
}

// production error handler
// no stacktraces leaked to user
app.use(function(err, req, res, next) {
    res.status(err.status || 500);
    res.render('error', {
        message: err.message,
        error: {}
    });
});


module.exports = app;
