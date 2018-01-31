var express = require('express');
var fs = require("fs");

var fileName = process.argv[3];
var port = Number(process.argv[2]);

var app = express();


app.get('/books', function(req, res) {
    fs.readFile(fileName, function(err, data){
       if(err != null){
            return res.sendStatus(500);
       }
       try{
           var result = JSON.parse(data);
           res.json(result);
       }
       catch(e){
           throw(e);
       }
    });
});

app.listen(port);