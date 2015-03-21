require('angular');
var automationService =require('./shared/automationService');
var heatingController =require('./heatingController');
  var app = angular.module("myapp", [])
      .service("automationService", automationService)
      .controller("heatingController", heatingController);
