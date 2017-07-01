# heatingController
# Automation
# Set up

- Read pdf in lirc folder - install lirc, and use configs --THIS IS IMPORTNANT
- Read http://labs.telasocial.com/raspberry-nodejs-init.d/ - add headingcontroller file to init.d
- Read: http://oskarhane.com/raspberry-pi-install-node-js-and-npm/
- 
troubleshoot:
- if lirc is broken (can't find server/ file)  see chttps://stackoverflow.com/questions/37897868/lirc-irsend-could-not-connect-to-socket-irsend-no-such-file-or-directory
https://stackoverflow.com/questions/37897868/lirc-irsend-could-not-connect-to-socket-irsend-no-such-file-or-directory
 additional step:
Also, as pointed out in this other tutorial, depending on the Raspberry firmware, you might need to add this to /boot/config.txt

dtoverlay=lirc-rpi,gpio_in_pin=XX,gpio_out_pin=YY 

# Tedcam
- instal mjpeg streamer https://sourceforge.net/projects/mjpg-streamer/
