var thingContext = require('./context/thing.js');

var thing = {
  "@context": thingContext,
  "@id": "test",
  "@type": ["Thing"],
  "name": "test thing"
};

var levelgraph = require('levelgraph');
var leveljsonld = require('levelgraph-jsonld');
var db = leveljsonld(levelgraph("db"));

db.join([{
  subject: db.v("Thing")
}], function (err, results) {
  if (err) throw err;
  if (results.length === 0) {
    db.jsonld.put(thing, function (err) {
      if (err) throw err;
      console.log("seeded db")
    });
  }
});
