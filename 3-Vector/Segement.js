import Point from "./Point.js";
class Segement{
    constructor(x_origin = 0 , y_origin = 0 , x_exterm = 0 , y_exterm = 0){
        this.origin = new Point(x_origin , y_origin);
        this.exterm = new Point(x_exterm , y_exterm);
    }

    show(){
        return `Origin : (${this.origin.x} , ${this.origin.y}) , Exterm : (${this.exterm.x} , ${this.exterm.y})`;
    }
}

export default Segement;