var http = require('http');
/*var url = require('url');*/
var fs = require('fs');
var url = require('url');
const PORT = process.env.PORT || 5000


http.createServer(function (req,res) {
	var q = url.parse(req.url, true);
	/*console.log(q.pathname);*/
	var filename = "." + q.pathname;
	

	if (filename == './') {
		filename ='./index';
	}

	filename = filename + '.html';
	console.log(filename);
 	fs.readFile(filename, function(err, data) {
 		if (err) {
 			res.writeHead(404, {'Content-Type': 'text/html'});
 			return res.end('404 Not Found');
 		}
		res.writeHead(200, {'Content-Type': 'text/html'});
		res.write(data);
		return res.end();
	/*var q = url.parse(req.url, true).query;
	var dates = q.year + " " + q.month;*/
		console.log("...Incoming Request: " + req.url);
		res.end();
	/*res.write(req.url);
	res.end();*/
	/*res.end('<h1>Hello World!</h1>');*/
	})

}).listen(PORT);

console.log('Server listening on Port 8080....');