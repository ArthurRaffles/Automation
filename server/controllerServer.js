var express = require('express');
var cors = require('cors');
var greetings = require('./greetings');
var app = express();
var path = require('path');
var heating = require('./heatingController');
var telly = require('./tellyController');

app.use(cors());
// app.get('/', function (req, res) {
//   console.log("about t0 send index.html");
//     console.log(__dirname);
//   var l = path.resolve('./public/index.html');
//   console.log(l);
//   res.sendFile(l);
// //  res.send(greetings.sayHelloInEnglish());
// })
app.use(express.static(__dirname + '/public'));
app.get('/hola', function (req, res) {

  res.send(greetings.sayHelloInSpanish());
})

app.get('/heatingOn', function (req, res) {

  res.send(heating.turnOn());
})

app.get('/heatingOff', function (req, res) {

  res.send(heating.turnOff());
})
app.get('/telly', function (req, res){
  res.send(telly.sendMessage(req.query));
})
var server = app.listen(3000, function () {

  var host = server.address().address
  var port = server.address().port

  console.log('Example app listening at http://%s:%s', host, port)

})
