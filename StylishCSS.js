var express = require('express');
var stylus = require("stylus");

var port = Number(process.argv[2]);
var filePath = process.argv[3];

var app = express();

app.use(stylus.middleware(filePath));
app.use(express.static(filePath));

app.get(filePath, function(req, res) {
  res.render('main');
});

app.listen(port);