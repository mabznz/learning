var async = require('async');

async.waterfall([
  function(callback) {
    console.log('cb1:' + callback)
    callback(null, 'one', 'two');
  },
  function(arg1, arg2, callback) {
    console.log('cb2:' + callback)
    callback(null, 'three');
  },
  function(arg1, callback) {
    console.log('cb3:' + callback)
    callback(null, 'done');
  },
], function(err, result) {
  console.log('results:' + result);
});
