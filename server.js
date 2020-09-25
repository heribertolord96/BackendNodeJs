const express =     require ('express');
const bodyParser =  require('body-parser');
 
//const router = require('./components/messages/network');
const router = require('./network/routes');


var app = express();
app.use(bodyParser.json());
app.use(express.urlencoded({extended: false}));
app.use(express.json());
//app.use(router);

router(app);

app.use('/app', express.static('public'));
/* app.use('/',function(req,res){
    res.send ('hola');
}); */

app.listen(3000);
console.log('la aplicacion está escuchando en el puerto 3000');