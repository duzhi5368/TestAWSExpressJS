var express = require('express');
var bodyParser = require("body-parser")

var port = Number(process.argv[2]);
var app = express();

app.use(bodyParser.urlencoded({
    extended: false
}))

app.post("/form", function(req,res){
   // req.body.str.split('').reverse()
   res.send(req.body.str.split('').reverse().join("")); 
});
app.listen(port);