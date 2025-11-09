import Rectangle from "./Rectangle.js";
import Square from "./Square.js";
import Point from "./Point.js";
import Segement from "./Segement.js";

let r = new Rectangle(3, 5);
let s = new Square(3, 3);
console.log(s.show());
console.log(s.surface());
console.log("-----");
console.log(r.show());
console.log(r.surface());

let p = new Point(1, 2);
let p1 = new Point(3, 4);
console.log(p , p1);
console.log("-----");

let seg = new Segement(1,2,3,4);
console.log(seg.show());