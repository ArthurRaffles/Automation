lirc_node = require('lirc_node');
lirc_node.init();

module.exports ={
  sendMessage: function(payload){

    console.log("about to irsend..11." + payload.channel);
    var keys = payload.channel.split("").map(function(prms){
      var key = 'KEY_' + prms;
      console.log(key);
      return key;
    });
	  //console.log(lirc_node.remotes);
	  //var x = ['KEY_1', 'KEY_0', 'KEY_3'];
    lirc_node.irsend.send_once("TEL",keys, function() {
      console.log("Sent 103 command!");
    });
  }
}
