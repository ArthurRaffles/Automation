function HeatingController($scope, automationService){
  this.automationService = automationService;

  console.log("in HeatingController..");
}

  HeatingController.prototype.turnOnHeating=function(){
      this.automationService.turnOnHeating();
  }
  HeatingController.prototype.turnOffHeating=function(){
      this.automationService.turnOffHeating();
  }
module.exports=HeatingController;
