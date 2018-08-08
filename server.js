var express = require ('express');
var app = express();

var tigers = ['john', 'mathias', 'pepe', 'pedro'];

require('./router/main')(app, tigers);

app.set('views', __dirname + '/views');
app.set('view engine', 'ejs');
app.engine('html', require('ejs').renderFile);

var server = app.listen(8080, function(){
    console.log('hello world');
});
