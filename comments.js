// Create web server
var http = require('http');
var url = require('url');
var fs = require('fs');
var comments = [];
var server = http.createServer(function(req, res) {
  var parseUrl = url.parse(req.url, true);
  var path = parseUrl.pathname;
  if (path === '/post') {
    var comment = parseUrl.query.comment;
    comments.push(comment);
    res.end();
  } else if (path === '/get') {
    res.setHeader('Content-Type', 'application/json');
    res.write(JSON.stringify(comments));
    res.end();
  } else {
    res.statusCode = 404;
    res.end();
  }
});
server.listen(3000);