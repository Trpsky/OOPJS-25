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

export default Vector2D;


