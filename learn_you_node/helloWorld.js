var http = require('http');
var fs = require('fs');

var server = http.createServer(function(request, response){
    console.log('HELLO WORLD')
});

server.listen(7000);