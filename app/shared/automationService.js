function AutomationService($http){
  this.baseUrl = "localhost:3000";
  this.$http = $http;
  console.log("in AutomationService..");
  AutomationService.prototype.turnOnHeating=function(){
    $http.get('/heatingOn').
      success(function(data, status, headers, config) {
        Console.log("Success " + status);
      }).
      error(function(data, status, headers, config) {
        Console.log("Err " + status);
      });
  }
  AutomationService.prototype.turnOffHeating=function(){
    $http.get('/heatingOff').
      success(function(data, status, headers, config) {
        Console.log("Success " + status);
      }).
      error(function(data, status, headers, config) {
        Console.log("Err " + status);
      });
  }
}
module.exports=AutomationService;
