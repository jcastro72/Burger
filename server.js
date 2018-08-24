var express = require('express');
var bodyParser = require('body-parser');
var methodOverride = require('method-override');
var exphbs = require('express-handlebars');

var app = express();

//Setting up port
var PORT = process.env.PORT || 8080;


app.use(express.static(__dirname + '/public'));
app.engine('handlebars',exphbs({
    defaultLayout: 'main'
}));
app.set('view engine', 'handlebars');

var routes = require('./controllers/routes.js');
app.use('/',routes);

app.listen(PORT, function() {
    console.log("Server listening on: http://localhost:" + PORT);
});
