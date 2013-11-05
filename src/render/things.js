var hyperspace = require('hyperspace');
var fs = require('fs');
var html = fs.readFileSync(__dirname + '/things.html', 'utf8');

module.exports = function () {
  return hyperspace(html, function (thing) {
    return {
      '.name': {
        href: "/things/" + thing['@id'],
        name: thing.name,
        _text: thing.name
      }
    };
  });
};
