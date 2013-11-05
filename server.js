var http = require('http');
var fs = require('fs');
var ecstatic = require('ecstatic')(__dirname + '/static');
var trumpet = require('trumpet');
var duplexer = require('duplexer');

var levelgraph = require('levelgraph');
var leveljsonld = require('levelgraph-jsonld');
var db = leveljsonld(levelgraph("db"));

var tabby = require('tabby')(function (route, params) {
  var tr = trumpet();
  var title = route.title;

  if (typeof title === 'function') title = title(params);
  tr.createWriteStream('#title').end(title);

  return duplexer(
    tr.createWriteStream('#main'),
    fs.createReadStream(__dirname + '/static/index.html').pipe(tr)
  );
});

tabby.add('/', {
  title: "home",
  render: function () {
    return fs.createReadStream(__dirname + '/static/home.html');
  }
});

tabby.add('/things', {
  title: "things",
  data: require('./data/things.js')(db),
  render: require('./render/things.js')
});

/*
tabby.add('/things/:name', {
  data: require('./data/thing.js')(db),
  render: require('./render/thing.js')
});

tabby.add('/people', {
  data: require('./data/people.js')(db),
  render: require('./render/people.js')
});

tabby.add('/person/:name', {
  data: require('./data/person.js')(db),
  render: require('./render/person.js')
});
*/
var server = http.createServer(function (req, res) {
  if (tabby.test(req)) {
    tabby.handle(req, res);
  }
  else ecstatic(req, res);
});
server.listen(5000);

var sock = require('shoe')(function (stream) {
  stream.pipe(tabby.createStream()).pipe(stream);
});
sock.install(server, '/sock');
