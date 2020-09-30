/* const express = require('express');
const app = express();

const { config }= require('./config/index');

app.get('/', function(req,res){
    res.send('hello world');

});
app.get('/json', function(req, res){
    res.json({hello: "world"});
});

app.listen(config.port, function(){
    console.log(`Listening http://localhost:${config.port}`);
}); */

const express = require('express');

const app = express();

const { config } = require('./config/index');
const moviesApi = require('./routes/movies.js')

/* app.get('/', function(req, res) {
    res.send('hello world');
});

app.get('/json', function(req, res) {
    res.json({ hello: 'world' });
});

app.get('/:year', function(req, res) {
    const year = parseInt(req.params.year);
    if((year % 4 === 0 && year % 100 !== 0) || year % 400 === 0){
        res.send(`${year} es bisiesto`);
    }else{
        res.send(`${year} no es bisiesto`);
    }
}); */
moviesApi(app);
app.listen(config.port, function() {
    console.log(`Listening http://localhost:${config.port}`);    
});