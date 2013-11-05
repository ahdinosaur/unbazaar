var http = require('http');
var fs = require('fs');
var trumpet = require('trumpet');
var duplexer = require('duplexer');
var path = require('path');

var express = require('express');
var static = require('ecstatic');
var less = require('less-middleware');
var browserify = require('browserify-middleware');

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
var app = express();
app.use(express.bodyParser());
app.use(express.methodOverride());

// setup tabby
app.use(function (req, res, next) {
  if (tabby.test(req)) {
    tabby.handle(req, res);
  } else {
    next();
  }
});

// setup browserify
app.use('/js/index.js', browserify(__dirname + '/browser.js'));

// setup less w/ bootstrap
var bootstrapPath = path.join(__dirname, 'node_modules', 'bootstrap');
app.use('/img', static(path.join(bootstrapPath, 'img')));
app.use(less({
  src: path.join(__dirname, 'less'),
  paths: [
    path.join(__dirname, 'less'),
    path.join(bootstrapPath, 'less')
  ],
  dest: path.join(__dirname, 'static', 'css'),
  prefix: '/css'
}));
app.use(static(__dirname + '/static'));

var server = app.listen(5000);

var sock = require('shoe')(function (stream) {
  stream.pipe(tabby.createStream()).pipe(stream);
});
sock.install(server, '/sock');
