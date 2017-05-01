var async = require('async');
var request = require('request');

// runs when all functions in first argument to series have completed

function done(err, results) {
  if (err) { throw err; }
  console.log('results:' + results);
}

async.parallel([

  function(next) {
    request.post({uri: 'http://localhost:8080', body: '5'}, function(err, res, body) {
      next(err, body && JSON.parse(body));
    });
  },

  function(next) {
    request.post({uri: 'http://localhost:8080', body: '4'}, function(err, res, body) {
      next(err, body && JSON.parse(body));
    });
  },
], done);
