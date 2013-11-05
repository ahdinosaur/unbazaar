var arraystream = require('arraystream');
var mapstream = require('map-stream');
var stream = require('stream');
var async = require('async');

var thingContext = require('../context/thing.js')

module.exports = function (db) {
  return function (params) {
    var data = new stream.PassThrough({ objectMode: true });
    getData(db, params, data);
    return data;
  };
};

function getData (db, params, data) {
  db.join([{
    subject: db.v("Thing")
  }], function (err, results) {
    if (err) throw err;

    return arraystream.create(results)
      .pipe(mapstream(function (result, cb) {
        db.jsonld.get(result["Thing"], { "@context": thingContext }, function (err, obj) {
          console.log(err, obj);
          cb(err, obj);
        });
      }))
      .pipe(data);
  });
};
