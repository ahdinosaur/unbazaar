var tabby = require('tabby')('#main');
var sock = require('shoe')('/sock');
sock.pipe(tabby.createStream()).pipe(sock);

var config = require('./config.js');

document.querySelector('#brand').textContent = config.brand;

tabby.on('show', function (href) {

});
