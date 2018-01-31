{"filter":false,"title":"Jade.js","tooltip":"/Jade.js","undoManager":{"mark":97,"position":97,"stack":[[{"start":{"row":0,"column":0},"end":{"row":9,"column":17},"action":"insert","lines":["var express = require('express');","var path = require(\"path\");","","var htmlPage = process.argv[3];","var port = Number(process.argv[2]);","var app = express();","","app.use(express.static(htmlPage));","","app.listen(port);"],"id":1}],[{"start":{"row":7,"column":0},"end":{"row":7,"column":34},"action":"remove","lines":["app.use(express.static(htmlPage));"],"id":2},{"start":{"row":7,"column":0},"end":{"row":7,"column":52},"action":"insert","lines":[" app.set('views', path.join(__dirname, 'templates'))"]}],[{"start":{"row":7,"column":0},"end":{"row":7,"column":1},"action":"remove","lines":[" "],"id":3}],[{"start":{"row":7,"column":51},"end":{"row":7,"column":52},"action":"insert","lines":[";"],"id":4}],[{"start":{"row":7,"column":52},"end":{"row":8,"column":0},"action":"insert","lines":["",""],"id":5}],[{"start":{"row":8,"column":0},"end":{"row":8,"column":30},"action":"insert","lines":["app.set('view engine', 'jade')"],"id":6}],[{"start":{"row":8,"column":30},"end":{"row":8,"column":31},"action":"insert","lines":[";"],"id":7}],[{"start":{"row":8,"column":31},"end":{"row":9,"column":0},"action":"insert","lines":["",""],"id":8}],[{"start":{"row":9,"column":0},"end":{"row":9,"column":55},"action":"insert","lines":[" res.render('index', {date: new Date().toDateString()})"],"id":9}],[{"start":{"row":9,"column":55},"end":{"row":9,"column":56},"action":"insert","lines":[";"],"id":10}],[{"start":{"row":9,"column":0},"end":{"row":9,"column":1},"action":"remove","lines":[" "],"id":11}],[{"start":{"row":3,"column":0},"end":{"row":3,"column":31},"action":"remove","lines":["var htmlPage = process.argv[3];"],"id":12}],[{"start":{"row":2,"column":0},"end":{"row":3,"column":0},"action":"remove","lines":["",""],"id":13}],[{"start":{"row":7,"column":31},"end":{"row":8,"column":0},"action":"insert","lines":["",""],"id":14}],[{"start":{"row":8,"column":0},"end":{"row":8,"column":39},"action":"insert","lines":["  app.get('/home', function(req, res) {"],"id":15}],[{"start":{"row":9,"column":0},"end":{"row":9,"column":4},"action":"insert","lines":["    "],"id":16}],[{"start":{"row":8,"column":0},"end":{"row":8,"column":2},"action":"remove","lines":["  "],"id":17}],[{"start":{"row":10,"column":0},"end":{"row":11,"column":0},"action":"insert","lines":["",""],"id":18}],[{"start":{"row":10,"column":0},"end":{"row":10,"column":1},"action":"insert","lines":["{"],"id":19}],[{"start":{"row":10,"column":1},"end":{"row":10,"column":2},"action":"insert","lines":[")"],"id":20}],[{"start":{"row":10,"column":2},"end":{"row":10,"column":3},"action":"insert","lines":[";"],"id":21}],[{"start":{"row":10,"column":0},"end":{"row":10,"column":1},"action":"remove","lines":["{"],"id":22}],[{"start":{"row":10,"column":0},"end":{"row":10,"column":1},"action":"insert","lines":["}"],"id":23}],[{"start":{"row":1,"column":27},"end":{"row":2,"column":0},"action":"insert","lines":["",""],"id":24}],[{"start":{"row":2,"column":0},"end":{"row":2,"column":1},"action":"insert","lines":["v"],"id":25}],[{"start":{"row":2,"column":1},"end":{"row":2,"column":2},"action":"insert","lines":["a"],"id":26}],[{"start":{"row":2,"column":2},"end":{"row":2,"column":3},"action":"insert","lines":["r"],"id":27}],[{"start":{"row":2,"column":3},"end":{"row":2,"column":4},"action":"insert","lines":[" "],"id":28}],[{"start":{"row":2,"column":4},"end":{"row":2,"column":5},"action":"insert","lines":["K"],"id":29}],[{"start":{"row":2,"column":5},"end":{"row":2,"column":6},"action":"insert","lines":["a"],"id":30}],[{"start":{"row":2,"column":5},"end":{"row":2,"column":6},"action":"remove","lines":["a"],"id":31}],[{"start":{"row":2,"column":4},"end":{"row":2,"column":5},"action":"remove","lines":["K"],"id":32}],[{"start":{"row":2,"column":4},"end":{"row":2,"column":5},"action":"insert","lines":["J"],"id":33}],[{"start":{"row":2,"column":5},"end":{"row":2,"column":6},"action":"insert","lines":["a"],"id":34}],[{"start":{"row":2,"column":6},"end":{"row":2,"column":7},"action":"insert","lines":["d"],"id":35}],[{"start":{"row":2,"column":7},"end":{"row":2,"column":8},"action":"insert","lines":["e"],"id":36}],[{"start":{"row":2,"column":7},"end":{"row":2,"column":8},"action":"remove","lines":["e"],"id":37}],[{"start":{"row":2,"column":6},"end":{"row":2,"column":7},"action":"remove","lines":["d"],"id":38}],[{"start":{"row":2,"column":5},"end":{"row":2,"column":6},"action":"remove","lines":["a"],"id":39}],[{"start":{"row":2,"column":4},"end":{"row":2,"column":5},"action":"remove","lines":["J"],"id":40}],[{"start":{"row":2,"column":4},"end":{"row":2,"column":5},"action":"insert","lines":["j"],"id":41}],[{"start":{"row":2,"column":5},"end":{"row":2,"column":6},"action":"insert","lines":["a"],"id":42}],[{"start":{"row":2,"column":6},"end":{"row":2,"column":7},"action":"insert","lines":["d"],"id":43}],[{"start":{"row":2,"column":7},"end":{"row":2,"column":8},"action":"insert","lines":["e"],"id":44}],[{"start":{"row":2,"column":8},"end":{"row":2,"column":9},"action":"insert","lines":[" "],"id":45}],[{"start":{"row":2,"column":9},"end":{"row":2,"column":10},"action":"insert","lines":["="],"id":46},{"start":{"row":2,"column":10},"end":{"row":2,"column":11},"action":"insert","lines":["-"]}],[{"start":{"row":2,"column":11},"end":{"row":2,"column":12},"action":"insert","lines":[" "],"id":47}],[{"start":{"row":2,"column":11},"end":{"row":2,"column":12},"action":"remove","lines":[" "],"id":48}],[{"start":{"row":2,"column":10},"end":{"row":2,"column":11},"action":"remove","lines":["-"],"id":49}],[{"start":{"row":2,"column":10},"end":{"row":2,"column":11},"action":"insert","lines":[" "],"id":50}],[{"start":{"row":2,"column":11},"end":{"row":2,"column":12},"action":"insert","lines":["r"],"id":51}],[{"start":{"row":2,"column":12},"end":{"row":2,"column":13},"action":"insert","lines":["e"],"id":52}],[{"start":{"row":2,"column":13},"end":{"row":2,"column":14},"action":"insert","lines":["q"],"id":53}],[{"start":{"row":2,"column":11},"end":{"row":2,"column":14},"action":"remove","lines":["req"],"id":54},{"start":{"row":2,"column":11},"end":{"row":2,"column":22},"action":"insert","lines":["require(\"\")"]}],[{"start":{"row":2,"column":20},"end":{"row":2,"column":21},"action":"insert","lines":["j"],"id":55}],[{"start":{"row":2,"column":21},"end":{"row":2,"column":22},"action":"insert","lines":["a"],"id":56}],[{"start":{"row":2,"column":20},"end":{"row":2,"column":22},"action":"remove","lines":["ja"],"id":57},{"start":{"row":2,"column":20},"end":{"row":2,"column":24},"action":"insert","lines":["jade"]}],[{"start":{"row":2,"column":26},"end":{"row":2,"column":27},"action":"insert","lines":[";"],"id":58},{"start":{"row":2,"column":27},"end":{"row":2,"column":28},"action":"insert","lines":["l"]}],[{"start":{"row":2,"column":27},"end":{"row":2,"column":28},"action":"remove","lines":["l"],"id":59}],[{"start":{"row":3,"column":0},"end":{"row":4,"column":0},"action":"insert","lines":["",""],"id":60}],[{"start":{"row":4,"column":0},"end":{"row":4,"column":1},"action":"insert","lines":["v"],"id":61}],[{"start":{"row":4,"column":1},"end":{"row":4,"column":2},"action":"insert","lines":["a"],"id":62}],[{"start":{"row":4,"column":2},"end":{"row":4,"column":3},"action":"insert","lines":["r"],"id":63}],[{"start":{"row":4,"column":3},"end":{"row":4,"column":4},"action":"insert","lines":[" "],"id":64}],[{"start":{"row":4,"column":4},"end":{"row":4,"column":5},"action":"insert","lines":["j"],"id":65}],[{"start":{"row":4,"column":5},"end":{"row":4,"column":6},"action":"insert","lines":["a"],"id":66}],[{"start":{"row":4,"column":6},"end":{"row":4,"column":7},"action":"insert","lines":["d"],"id":67}],[{"start":{"row":4,"column":7},"end":{"row":4,"column":8},"action":"insert","lines":["e"],"id":68}],[{"start":{"row":4,"column":8},"end":{"row":4,"column":9},"action":"insert","lines":["P"],"id":69}],[{"start":{"row":4,"column":9},"end":{"row":4,"column":10},"action":"insert","lines":["a"],"id":70}],[{"start":{"row":4,"column":9},"end":{"row":4,"column":10},"action":"remove","lines":["a"],"id":71}],[{"start":{"row":4,"column":8},"end":{"row":4,"column":9},"action":"remove","lines":["P"],"id":72}],[{"start":{"row":4,"column":8},"end":{"row":4,"column":9},"action":"insert","lines":["F"],"id":73}],[{"start":{"row":4,"column":9},"end":{"row":4,"column":10},"action":"insert","lines":["i"],"id":74}],[{"start":{"row":4,"column":10},"end":{"row":4,"column":11},"action":"insert","lines":["l"],"id":75}],[{"start":{"row":4,"column":11},"end":{"row":4,"column":12},"action":"insert","lines":["e"],"id":76}],[{"start":{"row":4,"column":12},"end":{"row":4,"column":13},"action":"insert","lines":[" "],"id":77}],[{"start":{"row":4,"column":13},"end":{"row":4,"column":14},"action":"insert","lines":["="],"id":78}],[{"start":{"row":4,"column":14},"end":{"row":4,"column":15},"action":"insert","lines":[" "],"id":79}],[{"start":{"row":4,"column":15},"end":{"row":4,"column":30},"action":"insert","lines":["process.argv[3]"],"id":80}],[{"start":{"row":4,"column":30},"end":{"row":4,"column":31},"action":"insert","lines":[";"],"id":81}],[{"start":{"row":8,"column":38},"end":{"row":8,"column":49},"action":"remove","lines":["'templates'"],"id":82},{"start":{"row":8,"column":38},"end":{"row":8,"column":46},"action":"insert","lines":["jadeFile"]}],[{"start":{"row":8,"column":38},"end":{"row":8,"column":46},"action":"remove","lines":["jadeFile"],"id":83}],[{"start":{"row":8,"column":38},"end":{"row":8,"column":40},"action":"insert","lines":["''"],"id":84}],[{"start":{"row":8,"column":39},"end":{"row":8,"column":40},"action":"insert","lines":["t"],"id":85}],[{"start":{"row":8,"column":40},"end":{"row":8,"column":41},"action":"insert","lines":["e"],"id":86}],[{"start":{"row":8,"column":41},"end":{"row":8,"column":42},"action":"insert","lines":["m"],"id":87}],[{"start":{"row":8,"column":42},"end":{"row":8,"column":43},"action":"insert","lines":["p"],"id":88}],[{"start":{"row":8,"column":43},"end":{"row":8,"column":44},"action":"insert","lines":["l"],"id":89}],[{"start":{"row":8,"column":44},"end":{"row":8,"column":45},"action":"insert","lines":["a"],"id":90}],[{"start":{"row":8,"column":45},"end":{"row":8,"column":46},"action":"insert","lines":["t"],"id":91}],[{"start":{"row":8,"column":46},"end":{"row":8,"column":47},"action":"insert","lines":["e"],"id":92}],[{"start":{"row":8,"column":47},"end":{"row":8,"column":48},"action":"insert","lines":["s"],"id":93}],[{"start":{"row":8,"column":17},"end":{"row":8,"column":25},"action":"insert","lines":["jadeFile"],"id":94}],[{"start":{"row":8,"column":25},"end":{"row":8,"column":26},"action":"insert","lines":[" "],"id":95}],[{"start":{"row":8,"column":26},"end":{"row":8,"column":27},"action":"insert","lines":["|"],"id":96}],[{"start":{"row":8,"column":27},"end":{"row":8,"column":28},"action":"insert","lines":["|"],"id":97}],[{"start":{"row":8,"column":28},"end":{"row":8,"column":29},"action":"insert","lines":[" "],"id":98}]]},"ace":{"folds":[],"scrolltop":0,"scrollleft":0,"selection":{"start":{"row":6,"column":20},"end":{"row":6,"column":20},"isBackwards":false},"options":{"guessTabSize":true,"useWrapMode":false,"wrapToView":true},"firstLineState":{"row":1,"state":"start","mode":"ace/mode/javascript"}},"timestamp":1517316045108,"hash":"c311ea1182e0194e49e4125da4c3cd75b9899528"}