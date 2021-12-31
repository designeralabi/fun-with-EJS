const express = require('express');
const app = express();
const ejs  = require ('ejs');
const port = 3000;


app.set('view engine', 'ejs');
app.use(express.static("public"));

app.get('/', (req, res) => {
    res.render('index', {title: 'home'});
});

app.get('/about', (req, res) => {
    res.render('about', {title: 'about'});
});

app.get('/contact', (req, res) => {
    res.render('contact', {title: 'contact'});
});



app.listen(port, () => console.log(`Sever listening on port ${port}!`));