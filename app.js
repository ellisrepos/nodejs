const express = require('express');
// express app
const app = express();
// register view engine/template
app.set('view engine', 'ejs');

// listen for request
const PORT = 8080;

app.listen(PORT, (error) => {
    if (error) {
        throw error;
    }
    console.log(`Express app - listening on port ${PORT}`);
});
app.get('/', (req, res) => {
    // How to send the response
    // res.write() 
    // res.end()
    // res.send('<p>Home page</p>');
    // res.sendFile('./views/index.html', {root: __dirname})
    const blogs = [
        {title: "Yoshi finds eggs", snippet: "Lorem ipsum dolor sit amet consectetur"},
        {title: "Mario finds stars", snippet: "Lorem ipsum dolor sit amet consectetur"},
        {title: "How to defeat bowser", snippet: "Lorem ipsum dolor sit amet consectetur"}
    ]
    res.render('index', { title: "Home", blogs });
});

app.get('/about', (req, res) => {
    // res.sendFile('./views/about.html', {root: __dirname})
    res.render('about',{ title: "About"});
});

app.get('/blogs/create', (req, res) => {
    res.render('create', { title: "Create a new blog"});
})

// redirects - don't need using EJS
// app.get('/about-me', (req, res) => {
//     res.redirect('/about');
// })

// 404 - create middleware and fires for every request that's invalid
app.use((req, res) => {
    // res.sendFile('./views/404.html', {root: __dirname})
    res.status(404).render('404', { title: "404"});
})