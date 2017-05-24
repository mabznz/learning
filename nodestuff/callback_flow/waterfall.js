var async = require('async');
var request = require('request');

// runs when all functions in first argument to series have completed

function done(err, res, body) {
  if (err) { throw err; }
  console.log('results:' + res);

}

async.waterfall([

  function(next) {
    request.post({uri: 'http://localhost:8080', body: '3' }, next)
  },

  function(res, body, next) {
    console.log('body:' + body);
    request.post({uri: 'http://localhost:8080', body: body }, next)
  },
], done);
