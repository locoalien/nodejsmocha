var express = require("express");
var app = express();
var operaciones = require("./operaciones");

app.get("/suma",function(req,res){
    var numero1 = parseInt(req.query.numero1,10);
    var numero2 = parseInt(req.query.numero2,10);

    var resultado = operaciones.TestSuma(numero1,numero2).toString();
    res.send(resultado);
});


app.listen(3000);
