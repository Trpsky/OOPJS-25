import Rectangle from "./Rectangle.js";
import Square from "./Square.js";

let r = new Rectangle(3, 5);
let s = new Square(3, 3);
console.log(s.show());
console.log(s.surface());
console.log("-----");
console.log(r.show());
console.log(r.surface());