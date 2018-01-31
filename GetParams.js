var express = require('express');
var url = require('url');

var port = Number(process.argv[2]);

var app = express();

app.get('/search', function(req, res) {
  var parsedURL = url.parse(req.url, true);
  res.send(JSON.stringify(parsedURL.query));
});

app.listen(port);