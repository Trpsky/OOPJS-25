import Rectangle from "./Shapes/Rectangle.js";
import Square from "./Shapes/Square.js";
import Point from "./Point/Point.js";
import Segement from "./Point/Segement.js";
import Vector2D from "./Vector2D/Vector2D.js";

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

console.log("-----");

let v1 = new Vector2D();
let v2 = new Vector2D(1 , 9);
let v3 = new Vector2D(1);
let v4 = new Vector2D(undefined,1);

console.log(v1.show()); 
console.log(v2.show()); 
console.log(v1.addition(v2)); 
console.log(v2); 
console.log(v3); 
console.log(v4); 