var async = require('async');
var request = require('request');

async.parallel(
{
  one: function(next) {
    request.post({uri: 'http://localhost:8080', body: '5'}, function(err, res, body) {
      next(err, body && JSON.parse(body));
    });
  },

  two: function(next) {
    request.post({uri: 'http://localhost:8080', body: '4'}, function(err, res, body) {
      next(err, body && JSON.parse(body));
    });
  },
},  function(err, results) {
    if (err) { throw err; }
    console.log('results:' + results.one + ',' + results.two);
  }
);
