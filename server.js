var express = require('express');
var session = require('express-session');
var cookieParser = require('cookie-parser');
var fs = require('fs');
var mysql = require('mysql');
var app = express();

// load the todos
var todos = [];
fs.readFile(__dirname+'/todos', 'utf8', function(err, data){
    // load the todos if there is no error
    if( ! err) todos = JSON.parse(data);

    // include routers
    require('./router/main')(app, todos, fs);

    // hande 404 errors
    app.use(function(req, res){
        res.status(404).render('404');
    });

    // handle generic errors
    app.use(function(err, req, res, next){
        res.status(500).send('The app found an error. Please try again later');
    });
});

// initialize the cookies and session
app.use(cookieParser());
app.use(session({secret: 'qwerty'}));

// initialize the views using ejs
app.set('views', __dirname + '/views');
app.set('view engine', 'ejs');
app.engine('html', require('ejs').renderFile);

// connection to mysql
var connection = mysql.createConnection({
    host: '127.0.0.1',
    user: 'root',
    password: 'root'
});

// start the server
var server = app.listen(8090);
