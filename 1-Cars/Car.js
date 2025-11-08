function Car(model , brand , year , type , fuel){
    this.model = model;
    this.brand = brand;
    this.year = year;
    this.type = type;
    this.fuel = fuel;
}

t = [];

let car1 = new Car("Model 3", "Tesla", 2024, "Sedan", "Electric");
let car2 = new Car("F-150", "Ford", 2023, "Truck", "Gasoline");
let car3 = new Car("911 Carrera", "Porsche", 2022, "Sports Car", "Gasoline");
let car4 = new Car("CR-V", "Honda", 2025, "SUV", "Hybrid");
let car5 = new Car("Golf", "Volkswagen", 2021, "Hatchback", "Diesel");

t.push(car1 , car2 , car3 , car4 , car5);


