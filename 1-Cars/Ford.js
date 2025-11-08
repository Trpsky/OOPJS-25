import Car from "./Car.js";

var Ford = function (model = "", brand = "", year = "", type = "", fuel = "", options = []) {
    Car.call(this, model , brand , year , type , fuel);
    this.options = options;
}

Ford.prototype = Object.create(Ford.prototype);

Ford.prototype.constructor = Ford;

export default Ford;