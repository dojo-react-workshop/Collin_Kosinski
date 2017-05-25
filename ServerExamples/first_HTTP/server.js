var http = require('http');
var fs = require('fs');

var server = http.createServer(function(request, response) {
  var pathToFile = './error.html'
  if(request.url == '/ninjas'){
    var pathToFile = './ninja.html';
  }else if(request.url == '/dojos/new'){
   pathToFile = './dojo.html';
  }else if(request.url == '/'){
   pathToFile = './index.html';
  }else{
    
  }
  fs.readFile(pathToFile, 'utf8', function(err, fileContents){
    response.end(fileContents);

  })
});

server.listen(8000);