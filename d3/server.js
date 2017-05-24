var path = require("path"),
    fs = require("fs");

require('http').createServer(function(req,res) {

  console.log("URL requested:" + req.url);

  var file = path.resolve(req.url);

  console.log("File requested:" + file);

  fs.open(file, 'r', function(error, fd) {
    if (error) {
      console.error(error);
      res.writeHead(500);
      res.end('No file');
    }
    var stream = fs.createReadStream(error, fd);
    stream.pipe(res);
  });


}).listen(8080, function() {
  console.log('File Server');
});
