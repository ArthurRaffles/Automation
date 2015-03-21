require('angular');
var automationService =require('./shared/automationService');
var heatingController =require('./heatingController');
  var app = angular.module("myapp", [])
      .service("automationService", automationService)
      .controller("heatingController", heatingController);


// $(document).ready(function(){
//   console.log("ready");
//   $("#onButton").click(function(){
//     console.log("clicky");
//       $.ajax({url: "http://192.168.0.85/controllerOn.py", success: function(result){
//           $("#resp").html(result);
//       }});
//   });
//   $("#offButton").click(function(){
//       $.ajax({url: "http://192.168.0.85/controllerOff.py", success: function(result){
//           $("#resp").html(result);
//       }});
//   });
// });
