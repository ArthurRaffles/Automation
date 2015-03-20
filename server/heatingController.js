var PythonShell = require('python-shell');


module.exports = {
  turnOn: function() {
    console.log(__dirname);
    var inst = PythonShell.run('controllerOn.py', this.options(), function (err) {

      if (err) {
        console.log(err);
        throw err;
      }
      console.log('finished');
    });
    inst.on('message', function (message) {
      // received a message sent from the Python script (a simple "print" statement)
      console.log(message);
    });
  },

  turnOff: function() {
    var inst = PythonShell.run('controllerOff.py',this.options(), function (err) {

        if (err) {
          console.log(err);
          throw err;
        }
      console.log('finished');
    });
    inst.on('message', function (message) {
      // received a message sent from the Python script (a simple "print" statement)
      console.log(message);
    });
  },



  options: function(){
    return {
      mode: 'text',
      pythonOptions: ['-u'],
      scriptPath:__dirname+'/python/'
    };
  }
};
