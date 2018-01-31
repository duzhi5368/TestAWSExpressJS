var express = require('express');
var path = require("path");

var htmlPage = process.argv[3];
var port = Number(process.argv[2]);
var app = express();

app.use(express.static(htmlPage));

app.listen(port);