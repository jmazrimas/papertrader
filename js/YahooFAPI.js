var symbolBidAsk = function(yahooJSON) {
	var quote = yahooJSON['query']['results']['quote']
	var bid = quote['Bid']
	var ask = quote['Ask']
	var symbol = quote['Symbol']

	return {
		'symbol':symbol, 
		'bid': bid, 
		'ask': ask
	}

};

var getYahooData = function(symbol) {
	$.ajax({
	    type: 'POST',
	    url: "https://query.yahooapis.com/v1/public/yql?q=select%20*%20from%20yahoo.finance.quotes%20where%20symbol%20in%20(%22"+symbol+"%22)&format=json&env=store%3A%2F%2Fdatatables.org%2Falltableswithkeys&callback=",

	    crossDomain: true,
	    success: function (msg) {
	    		console.log(symbolBidAsk(msg))
	    },
	    error: function (request, status, error) {

	        alert(error);
	    }
	});
}
