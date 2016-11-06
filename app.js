var express = require('express');
var path = require('path');
var bodyParser = require('body-parser')
var app = express();

//Database
var pg = require('pg');
var conString = 'postgres://localhost/papertrader';
var client = new pg.Client(conString);

//Express config
app.set('view engine','ejs');
app.set('views',path.join(__dirname,'views'))

//Middleware

app.use(bodyParser());
app.use(express.static(path.join(__dirname,'resources')));

//Routes

app.get('/', function(req,res) {
	client.connect();

  var query = client.query('SELECT * FROM trades', function(err, result){
  	return result['rows']
  });
	// addTrade(['GOOG',true,333,234.24]);
	res.render('index')
})

app.post('/', function(req,res){

	console.log(req.body)
	
	res.redirect('/')
})


function addTrade(tradeDetails){
	results = [];

	pg.connect(conString, (err, client, done) => {
		if(err) {
			done();
			console.log(err);
		}
		//INSERT DATA
		client.query('INSERT INTO trades(symbol, side, quantity, price) values($1, $2, $3, $4)',
    tradeDetails);

    // SQL Query > Select Data
    const query = client.query('SELECT * FROM trades');
    // Stream results back one row at a time
    query.on('row', (row) => {
      results.push(row);
    });

    // After all data is returned, close connection and return results
    query.on('end', () => {
      done();
    });
	})

}

app.listen(1337, function() {

})