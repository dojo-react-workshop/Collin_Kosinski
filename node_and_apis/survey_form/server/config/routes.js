module.exports = function (app) {
'use strict';
    app.get('/', function (req, res) {
        res.render('index');
    })
    app.post('/result', function (req, res) {
       const submitted_info = {
            name: req.body.name,
            dojo_location: req.body.dojo_location,
            favorite_language: req.body.favorite_language,
            comment: req.body.comment
        };
        res.render("result", { user_data: submitted_info });
    })
};