var express = require('express');
var app = express();
var bp = require('body-parser');
var path = require('path');
var port = 7000;

app.use(express.static(path.join(__dirname, './client')));
app.use(bp.urlencoded({extended:true}));
app.set('views', path.join(__dirname, './client/templates'));
app.set('view engine', 'ejs');

require('./server/config/routes.js')(app);


app.listen(port, function(){
    console.log('listening on port 7000 yall');
})