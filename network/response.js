exports.success = function (req, res, message, status) {
   // res.send('Primera respuesta');
  // res.send(message);
    res.status(status || 200).send({
        error: '',
        body: message
    });
}

exports.error = function(req, res,  message, status, details){
    res.status(status || 50).send({
        error: message,
        body: '',
    })
}