class Vector2D {
    x;
    y;
    constructor(x = 0 , y = 0){
        this.x = x;
        this.y = y;
    }
    show(){
        return `X : ${this.x} , Y : ${this.y}`;
    }

    addition(v){
        // x = this.x + v.x;
        // y = this.y + v.y;
        // result = new Vector2D(x , y);
        // return result;
        return new Vector2D((this.x + v.x) , (this.y + v.y));
    }
}

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

