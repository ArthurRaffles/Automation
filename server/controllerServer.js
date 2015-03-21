var express = require('express');
var cors = require('cors');
var app = express();
var greetings = require('./greetings');
var heating = require('./heatingController');

app.use(cors());
app.get('/', function (req, res) {

  res.send(greetings.sayHelloInEnglish());
})

app.get('/hola', function (req, res) {

  res.send(greetings.sayHelloInSpanish());
})

app.get('/heatingOn', function (req, res) {

  res.send(heating.turnOn());
})

app.get('/heatingOff', function (req, res) {

  res.send(heating.turnOff());
})

var server = app.listen(3000, function () {

  var host = server.address().address
  var port = server.address().port

  console.log('Example app listening at http://%s:%s', host, port)

})
