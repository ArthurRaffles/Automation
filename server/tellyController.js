lirc_node = require('lirc_node');
lirc_node.init();
var Client = require('node-rest-client').Client;
module.exports ={
  sendMessage: function(payload){

    var keys;
    if(payload.channel){
      console.log("about to irsend.." + payload.channel);
      keys = payload.channel.split("").map(function(prms){
        var key = 'KEY_' + prms;
        console.log(key);
        return key;
      });
    }
    if(payload.command){
        console.log("about to irsend command.." + payload.command);
        keys = ['KEY_' + payload.command];
    }

	  console.log(lirc_node.remotes);

    lirc_node.irsend.send_once("TEL",keys, function() {
      console.log("Sent command!");
      console.log(keys);
    });
  },
  
  getChannels: function(res){
    var client = new Client();

    // set content-type header and data as json in args parameter
    var args = {
    	headers: { "Content-Type": "application/json" }
    };

    client.post("http://www.freesat.co.uk/tvguide/fetchChannels/280/1", args, function (data, response) {
    	console.log(data);
      res.send(data);
    });
  }
}
