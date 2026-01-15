#!/usr/bin/env node

const http = require('http');
const fs = require('fs');
// Store a server
// request obj, response obj
const server = http.createServer((req, res) => {
    console.log(req.url, req.method);
    res.setHeader('Content-Type', 'text/html');
      // text/plain if we send plain text
    // Send content to browser
    // res.write('<head><link rel="stylesheet" href="#"></head>')
    // res.write('<p>hello, ninjas</p>'); 
    // res.write('<p>hello again, ninjas</p>'); 
    // res.end();
    let path = './views/';
    switch(req.url) {
        case '/':
            path += 'index.html';
            res.statusCode = 200;
            break;
        case '/about':
            path += 'about.html';
            res.statusCode = 200;
            break;
        case '/about-me': // redirecting to about page 
            res.statusCode = 301;
            res.setHeader('Location', '/about');
            res.end();
            break;
        case '/contact':
            path += 'contact.html';
            res.statusCode = 200;
            break;
        case '/contact-me':
            res.statusCode = 301;
            res.setHeader('Location', '/contact');
            res.end();
            break;
        default:
            path += '404.html';
            res.statusCode = 404;
            break;
    }

  
    fs.readFile(path, (err, data) => {
        if (err) {
            console.log(err);
            res.end();
        } else {
            res.end(data);
        }
    })
});

server.listen(8080, 'localhost', () => {
    console.log("listening to request on port 8080")
});