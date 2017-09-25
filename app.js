var express = require('express');
var ejs = require('ejs');
var app = express();

app.use(express.static('./public'));

app.set('views', './views');
app.engine('html', ejs.__express);
app.set('view engin', 'html');


app.get('/test', function (req, res) {
	res.render('test.html');
});


app.listen(8002, function () {
	console.log('listen on 8002');
});