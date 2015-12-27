lirc_node = require('lirc_node');
lirc_node.init();

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
  }
}
