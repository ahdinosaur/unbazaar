var tabby = require('tabby')('#main');
var sock = require('shoe')('/sock');
sock.pipe(tabby.createStream()).pipe(sock);

var titleElem = document.querySelector('#title');
tabby.on('show', function (href) {
  var title = href.split('?')[0].split('/').slice(-1)[0];
  titleElem.textContent = title || 'home';
});
