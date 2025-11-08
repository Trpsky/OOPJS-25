import Car from "./Car.js";
import Ford from "./Ford.js";
import Hyndai from "./Hyndai.js";

let car1 = new Hyndai("Model 3", "Tesla", 2024, "Sedan", "Electric" , "Serie A" , true);
let car2 = new Car("F-150", "Ford", 2023, "Truck", "Gasoline");
let car3 = new Car("911 Carrera", "Porsche", 2022, "Sports Car", "Gasoline");
let car4 = new Car("CR-V", "Honda", 2025, "SUV", "Hybrid");
let car5 = new Car("Golf", "Volkswagen", 2021, "Hatchback", "Diesel");
let t = [];

t.push(car1 , car2 , car3 , car4 , car5);

console.log(t);

t.sort((a, b) => b.year - a.year);

console.log(t);