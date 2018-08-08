module.exports = function(app, tigers)
{
    app.get('/', function(req, res){
        if(req.session.username) {
            res.render('index', {ptitle:"Tigers", tigers: tigers, username: req.session.username});
        }
        else res.redirect('/login');
    });

    app.get('/add', function(req, res){
        if(req.session.username) {
            res.render('add', {ptitle:"Add tiger", username: req.session.username});
        }
        else res.redirect('/login');
    });

    app.get('/add-submit', function(req, res){
        tigers.push(req.query.name);
        res.redirect('/');
    });

    app.get('/update', function(req, res){
        if(req.session.username) {
            res.render('update', {ptitle:"Update tiger", username: req.session.username});
        }
        else res.redirect('/login');
    });

    app.get('/update-submit', function(req, res){
        tigers.splice(req.query.pos, 1, req.query.name);
        res.redirect('/');
    });

    app.get('/del', function(req, res){
        if(req.session.username) {
            res.render('delete', {ptitle:"Delete tiger", username: req.session.username});
        }
        else res.redirect('/login');
    });

    app.get('/del-submit', function(req, res){
        tigers.splice(req.query.pos, 1);
        res.redirect('/');
    });

    app.get('/login', function(req, res){
        res.render('login', {ptitle: "Login", hideLogin: true});
    });

    app.get('/login-submit', function(req, res){
        req.session.username = req.query.name;
        res.redirect('/');
    });

    app.get('/logout-submit', function(req, res){
        req.session.username = false;
        res.send('You ended your session correctly');
    });

    app.get('/get-tigers', function(req, res){
        res.json({tigers: tigers});
    });
}
