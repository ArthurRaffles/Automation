function AutomationService($http){
  this.baseUrl = "http://0.0.0.0:3000";
  this.$http = $http;
  console.log("in AutomationService..");
  AutomationService.prototype.turnOnHeating=function(){
    $http.get(this.baseUrl+'/heatingOn').
      success(function(data, status, headers, config) {
        console.log("Success " + status);
      }).
      error(function(data, status, headers, config) {
        console.log("Err " + status);
      });
  }
  AutomationService.prototype.turnOffHeating=function(){
    $http.get(this.baseUrl+'/heatingOff').
      success(function(data, status, headers, config) {
        console.log("Success " + status);
      }).
      error(function(data, status, headers, config) {
        console.log("Err " + status);
      });
  }
}
module.exports=AutomationService;
