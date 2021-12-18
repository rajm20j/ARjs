var express = require('express');
var app = express();
var path = require('path');
app.set('/', 'html');
__dirname = path.resolve();
console.log(path.join(__dirname, '/static'));
app.use(express.static(path.join(__dirname, '/static')));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
var port = 8080;
app.get('/', function (req, res) {
    res.render('./static/index');
});
app.listen(port, function () {
    console.log("Listening on port ".concat(port));
});
