var express = require('express');

var port = Number(process.argv[2]);

var app = express();

app.put('/message/:NAME', function(req, res) {
  var id = req.params.NAME;
  res.send(require('crypto')
    .createHash('sha1')
    .update(new Date().toDateString() + id)
    .digest('hex')
  );
});

app.listen(port);