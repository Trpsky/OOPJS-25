import Car from "./Car.js";

var Hyndai = function( model = "", brand = "", year = "", type = "", fuel = "" , serie = "" , hybirde = false){
    Car.call(this ,model , brand , year , type , fuel);
    this.serie = serie;
    this.hybirde = hybirde;
}

Hyndai.prototype = Object.create(Car.prototype);

Hyndai.prototype.constructor = Hyndai;

Hyndai.prototype.alarm = function(){
    console.log("Alarm !");
}

export default Hyndai;