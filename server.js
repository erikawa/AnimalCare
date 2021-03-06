var express = require("express");
var app = express();
var router = express.Router();
var path = __dirname + "/views/";

router.get('/', function(req, res) {
	res.redirect('/home');
});

router.get('/home', function(req, res) {
	res.sendFile(path + "home.xhtml");
});

app.use('/', router);
app.use('/bootstrap', express.static(__dirname + "/node_modules/bootstrap/dist/"));
app.use('/jquery', express.static(__dirname + "/node_modules/jquery/dist/"));
app.use('/assets', express.static(__dirname + "/assets/"));

app.listen(3000, function() {
	console.log("Server is up!");
})