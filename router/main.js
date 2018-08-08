module.exports = function(app, tigers)
{
    app.get('/', function(req, res){
        res.render('index', {ptitle:"Tigers", tigers: tigers});
    });

    app.get('/add', function(req, res){
        res.render('add', {ptitle:"Add tiger"});
    });

    app.get('/add-submit', function(req, res){
        tigers.push(req.query.name);
        res.redirect('/');
    });

    app.get('/update', function(req, res){
        res.render('update', {ptitle:"Update tiger"});
    });

    app.get('/update-submit', function(req, res){
        tigers.splice(req.query.pos, 1, req.query.name);
        res.redirect('/');
    });

    app.get('/del', function(req, res){
        res.render('delete', {ptitle:"Delete tiger"});
    });

    app.get('/del-submit', function(req, res){
        tigers.splice(req.query.pos, 1);
        res.redirect('/');
    });
}
