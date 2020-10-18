var http = require('http');
var url = require('url');
var fs = require('fs');


http.createServer(function(req, res) {
    var q = url.parse(req.url)

    let filename = (q.pathname == '/') ? 'index.html'
                    : (q.pathname == '/about') ? 'about.html'
                    : (q.pathname == '/contact-me') ? 'contact-me.html'
                    : '404.html'

    fs.readFile(filename, function (err, data) {
        res.writeHead(200, {'Content-Type': 'text/html'});
        res.write(data);
        return res.end()
    })
}).listen(8080)

