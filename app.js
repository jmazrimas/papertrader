var express = require('express');
var path = require('path');
var bodyParser = require('body-parser')
var app = express();

//Express config
app.set('view engine','ejs');
app.set('views',path.join(__dirname,'views'))

//Middleware

app.use(bodyParser());
app.use(express.static(path.join(__dirname,'resources'))

//Routes

app.get('/', function(req,res) {
	res.render('index')
})

app.post('/', function(req,res){
	console.log(req.body)
	res.redirect('/')
})


app.listen(1337, function() {

})