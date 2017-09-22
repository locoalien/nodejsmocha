var operaciones = require("./libreria/operaciones.js");//Invoxamos la libreria del desarrollador

exports.TestSuma = function(a,b){
    return operaciones.suma(a,b);//Invocamos la funcion del desarollador
};

exports.TestResta = function(a,b){
    return operaciones.resta(a,b);
};

exports.TestMultiplicar = function(a,b){
    return operaciones.multiplicar(a,b);
};

exports.TestDivision = function(a,b){
    return operaciones.dividir(a,b);
};