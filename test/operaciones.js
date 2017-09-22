var expect = require("chai").expect;
var operaciones = require("../app/operaciones");

describe("Operaciones aritmeticas",function(){


   describe("Suma operacion a+b", function(){
    it("realizar operacion",function(){

        //Valores de entrada iniciales para el testing
         var pru1 = operaciones.TestSuma(10,1);
         var pru2 = operaciones.TestSuma(15,1);
         var pru3 = operaciones.TestSuma(17,1);
         var pru4 = operaciones.TestSuma(18,1);
         var pru5 = operaciones.TestSuma(19,30);
         var pru6 = operaciones.TestSuma(20,30);

         //Resultado esperado de la ejecucion de la funcion testing
         expect(pru1).to.deep.equal(11);
         expect(pru2).to.deep.equal(16);
         expect(pru3).to.deep.equal(18);
         expect(pru4).to.deep.equal(19);
         expect(pru5).to.deep.equal(49);
         expect(pru6).to.deep.equal(50);
    });
   });

   describe("Resta operacion a-b", function(){
    it("realizar operacion",function(){

        //Valores de entrada iniciales para el testing
         var pru1 = operaciones.TestResta(10,1);
         var pru2 = operaciones.TestResta(15,1);
         var pru3 = operaciones.TestResta(17,1);
         var pru4 = operaciones.TestResta(18,1);
         var pru5 = operaciones.TestResta(19,30);
         var pru6 = operaciones.TestResta(20,30);

         //Resultado esperado de la ejecucion de la funcion testing
         expect(pru1).to.deep.equal(9);
         expect(pru2).to.deep.equal(14);
         expect(pru3).to.deep.equal(16);
         expect(pru4).to.deep.equal(17);
         expect(pru5).to.deep.equal(-11);
         expect(pru6).to.deep.equal(-10);
    });
   });

   describe("Multiplicar operacion a*b", function(){
    it("realizar operacion",function(){

        //Valores de entrada iniciales para el testing
         var pru1 = operaciones.TestMultiplicar(10,1);
         var pru2 = operaciones.TestMultiplicar(15,1);
         var pru3 = operaciones.TestMultiplicar(17,1);
         var pru4 = operaciones.TestMultiplicar(18,1);
         var pru5 = operaciones.TestMultiplicar(19,30);
         var pru6 = operaciones.TestMultiplicar(20,30);

         //Resultado esperado de la ejecucion de la funcion testing
         expect(pru1).to.deep.equal(10);
         expect(pru2).to.deep.equal(15);
         expect(pru3).to.deep.equal(17);
         expect(pru4).to.deep.equal(18);
         expect(pru5).to.deep.equal(570);
         expect(pru6).to.deep.equal(600);
    });
   });
});

