const express = require('express');
const app = express();
const ejs  = require ('ejs');
const port = 3000;


app.set('view engine', 'ejs');

app.get('/', (req, res) => {
    // res.send('Hello World!');
    res.render('index');
});

app.listen(port, () => console.log(`Example app listening on port ${port}!`));