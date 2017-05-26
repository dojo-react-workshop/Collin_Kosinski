module.exports = function (app) {
'use strict';
    app.get('/', function (req, res) {
        res.render('index');
    })
    app.post('/result', function (req, res) {
        res.render("result", req.body);
    })
};