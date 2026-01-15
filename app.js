const express = require('express');
// express app
const app = express();
// listen for request
app.listen(8080);
app.get('/', (req, res) => {
    // How to send the response
    // res.write() 
    // res.end()
    // res.send('<p>Home page</p>');
    res.sendFile('./views/index.html', {root: __dirname})
});

app.get('/about', (req, res) => {
    res.sendFile('./views/about.html', {root: __dirname})
});

// redirects
app.get('/about-me', (req, res) => {
    res.redirect('/about');
})

// 404 - create middleware and fires for every request that's invalid
app.use((req, res) => {
    res.sendFile('./views/404.html', {root: __dirname})
})