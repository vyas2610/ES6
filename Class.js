class abc {
    a = 10;
    b = 20;
    constructor() {
        console.log(`This is Constructor..!`)
    }

    calc() {
        console.log(this.a+this.b);
    }
}
class abc1 extends abc {
    c = 10;
    d = 20;
    constructor() {
        super();
        console.log(`This is Constructor..!`)
    }

    calc1() {
        console.log(this.c+this.d);
    }
}

let a1 = new abc1;
a1.calc();

