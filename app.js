var express = require('express');
var app = express();
const port = 3000;
app.set('view engine', 'ejs');
app.use(express.static('public'));
app.get('/', (req, res) => {
    res.render("index");
})
app.listen(port, () => {
    console.log('App started listning at ' + port);
})