module.exports = function(app, tigers)
{
    app.get('/', function(req, res){
        res.send(getTigers(tigers));
    });

    app.get('/add', function(req, res){
        res.render('add.html');
    });

    app.get('/add-submit', function(req, res){
        tigers.push(req.query.name);
        res.send(getTigers(tigers));
    });

    app.get('/update', function(req, res){
        res.render('update.html');
    });

    app.get('/update-submit', function(req, res){
        tigers.splice(req.query.pos, 1, req.query.name);
        res.send(getTigers(tigers));
    });

    app.get('/del', function(req, res){
        res.render('delete.html');
    });

    app.get('/del-submit', function(req, res){
        tigers.splice(req.query.pos, 1);
        res.send(getTigers(tigers))
    });
}

function getTigers(tigers) {
    var tgs = "";
    for(var i=0; i<tigers.length; i++){
        tgs += '<li>'+tigers[i]+'</li>';
    }
    return '<ol>'+tgs+'</ol>';
}
