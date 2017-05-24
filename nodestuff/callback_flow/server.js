require('http').createServer(function(req,res) {
  var body = '';
  req.setEncoding('utf8');
  req.on('data', function(data) {
    body += data;
  });

  req.once('end', function() {
    var number = JSON.parse(body);
    var squared = Math.pow(number, 2);
    res.end(JSON.stringify(squared));
  });
}).listen(8080, function() {
  console.log('Squaring Server');
});
