var http = require('http');
var me = reqiore('./name.js');


var server = http.createServer(function (req, res) {
if (req.url == '/') {
res.writeHead(200, { 'Content-Type': 'text/html' });
res.write(
'<html><body><h2>Welcome to my Node.js Application</h2><p>Welcome '+ me.Name + '. This is an activity about basics of Node.js</p></body></html>'
);
res.end();
} else if (req.url == '/about') {
res.writeHead(200, { 'Content-Type': 'text/html' });
res.write(
'<html><body><h2>This is the About Page</h2><p>Hello Matthew Salvador. This activity will teach on how to deal with a simple server and local modules in Node.js</p></body></html>'
);
res.end();
} else if (req.url == '/contact') {
res.writeHead(200, { 'Content-Type': 'text/html' });
res.write(
'<html><body><h2>This is the Contact Page</h2><p>Matthew Salvador. if you want additional details about this activity go to this site: https://www.tutorialsteacher.com/node.js/nodejs-tutorials</p></body></html>'
);
res.end();
} else if (req.url == '/gallery') {
res.writeHead(200, { 'Content-Type': 'text/html' });
res.write('<html><body><h2>This is the Gallery Page</h2></body></html>');
res.end();
} else res.end('Invalid Request!');
});

server.listen(5000);

console.log('Node.js web server at port 5000 is running..');