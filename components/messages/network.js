const express = require('express');
const response = require('../../network/response');
const controller = require('./controller');
const store = require('./store');
const router = express.Router();


router.get('/', function (req, res) {
    /*   console.log(req.headers);
      res.header({
          "custom-header": "nuestro valor personalizado",
  } );
  response.success(req ,res, 'Lista de mensajes');  */

    controller.getMessages()
        .then((messageList) => {
            response.success(req, res, messageList, 200);
        })
        .catch(e => {
            response.error(req, res, 'Unexpected error', 500, e);
        })

});

router.post('/', (req, res) => {
    controller.addMessage(req.body.user, req.body.message)
        .then((fullMessage) => {
            response.success(req, res, 201, fullMessage);
        })
        .catch(e => {
            next(e);
        });
});
// res.send('Mensajes agregados');   
/*  console.log(req.body);
 response.success(req ,res , 'Creado correctamente');  
  console.log(req.query);*/

/*  if (req.query.error =="ok"){
     response.error(req, res, 'Error inesperado', 500, 'Es solo una simulacion');
 }else{
     response.success(req, res, 'Creado correctamente', 201);
 } */
router.patch('/id', function (req, res){
    controller.updateMessage(req.params.id, req.body.text)
    .then((data)=>{
        response.success(req, res, data, 200);
    })
    .catch(e =>{
        response.error(req,res, 'Eroor interno ',500, e);
    })
})

router.delete('/delete', function (req, res) {
    console.log(req.query);
    console.log(req.body);
    // res.send('Mensaje ' + req.body.text +' borrado');
    res.status(201).send({ error: '', body: 'Creado correctamente' })
});

module.exports = router;