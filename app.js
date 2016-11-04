var express = require('express');
var path = require('path');
var bodyParser = require('body-parser')
var app = express();

//Express config
app.set('view engine','ejs');
app.set('views',path.join(__dirname,'views'))

//Middleware

app.use(bodyParser());

//Routes

app.get('/', function(req,res) {
	res.render('index')
})

app.post('/', function(req,res){
	console.log(req.body)
	res.render('index')
})


app.listen(1337, function() {

})