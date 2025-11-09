class Rectangle{
    
    constructor(a , b , name = "rectangle"){
        this.a = a;
        this.b = b;
        this.name = name;
    }

    show(){
        return `${this.name} : a=${this.a} , b=${this.b}`;
    }

    surface(){
       return this.a*this.b;
    }
}

export default Rectangle;