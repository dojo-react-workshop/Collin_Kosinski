module.exports = function(app) {

    app.get('/', function(req, res) {
        res.render('index');
    })

    app.post('/submit', function(req, res) {
        res.render('name_results', req.body);

    })

    app.delete('/delete', function(req, res) {
        res.status(202);
        res.end();
    })

}