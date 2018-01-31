var express = require('express');
var path = require("path");
var jade = require("jade");

var jadeFile = process.argv[3];
var port = Number(process.argv[2]);
var app = express();

app.set('views', jadeFile || path.join(__dirname, 'templates'));
app.set('view engine', 'jade');
app.get('/home', function(req, res) {
    res.render('index', {date: new Date().toDateString()});
});

app.listen(port);