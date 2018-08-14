module.exports = function(app, todos, fs)
{
    //
    // index file
    //
    app.get('/', function(req, res){
        if(req.session.username) {
            res.render('index', {ptitle:"todos", todos: todos, username: req.session.username});
        }
        else res.redirect('/login');
    });

    //
    // add a new todo
    //
    // app.get('/add', function(req, res){
    //     if(req.session.username) {
    //         res.render('add', {ptitle:"Add todo", username: req.session.username});
    //     }
    //     else res.redirect('/login');
    // });
    app.get('/', function(req, res){
        if(req.session.username) {
            // res.render('index', {todos:todos, username: req.session.username});
        }
        else res.redirect('/login');
    });

    app.get('/add-submit', function(req, res){
        // save todo to the array
        todos.push(req.query.name);

        // save todo to the file
        //fs.writeFile(__dirname+'/../todos', JSON.stringify(todos), 'utf8');

        // redirect to home
        res.redirect('/');
    });

    // 
    // update a todo
    //
    app.get('/update', function(req, res){
        if(req.session.username) {
            res.render('update', {ptitle:"Update todo", username: req.session.username});
        }
        else res.redirect('/login');
    });

    app.get('/update-submit', function(req, res){
        // update todo array
        todos.splice(req.query.pos, 1, req.query.name);

        // update todo from the file

        // redirect to home
        res.redirect('/');
    });

    //
    // delete a todo
    //
    app.get('/del', function(req, res){
        if(req.session.username) {
            res.render('delete', {ptitle:"Delete todo", username: req.session.username});
        }
        else res.redirect('/login');
    });

    app.get('/del-submit', function(req, res){
        // delete from array
        todos.splice(req.query.pos, 1);

        // delete todo from the file
        

        // redirect to home
        res.redirect('/');
    });

    app.get('/login', function(req, res){
        res.render('login', {ptitle: "Login", hideLogin: true});
    });

    //
    // login and logout a user
    //
    app.get('/login-submit', function(req, res){
        req.session.username = req.query.name;
        res.redirect('/');
    });

    app.get('/logout-submit', function(req, res){
        req.session.username = false;
        res.send('You ended your session correctly');
    });

    //
    // ajax calls
    //
    app.get('/get-todos', function(req, res){
        res.json({todos: todos});
    });
}
