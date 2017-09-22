var expect = require("chai").expect;
var request = require("request"); 

describe("Servicio web Operaciones",function(){
    describe("Servicio suma",function(){
        //Declaro la variable con la url del servicio web 
        var url = "http://localhost:3000/suma?numero1=10&numero2=10";
        //Pregunto si el estatus es 200 en este caso el servicio esta activo
        it("estatus 200", function(done){
            //request me permite obtener toda la informacion realacionada con el servicio web
            request(url,function(error, response, body){
                //Obtengo la informacion del servicio web en este caso el estatus
                expect(response.statusCode).to.equal(200);
                done();
            });
        });
        //Valido el resultado de la invocacion del servicio web
        it("resultado servicio",function(done){
            request(url,function(error, response, body){
                expect(body).to.equal("20");
                done();
            });
        });
    });
});