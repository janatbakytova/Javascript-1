//ПОЛИМОРФИЗМ

class car {
    constructor(title, model, color) {
        this.title = title;
        this.model = model;
        this.color = color;
    }
}

startEngine(){
    console.log(`on${this.title} $(this.model) engine started!`);
}

class airplane extends transport {
    constructor(title, model, color, type, capacity) {
        super(title, model, color);
        this.type = type;
        this.capacity = capacity;
    }
    startEngine() {
        console.log(`on${this.title} $(this.model) engine started!`);
    }
}

information(){
    console.log(
        title = ${ this.title }
        model = ${ this.model }
        type = ${ this.type }
        capacity = ${ this.capacity }
        color = ${ this.color }
    )
}


class car extends transport {
    constructor(title, model, color, maxSpeed) {
        super(title, model, color)
        this.maxSpeed = maxSpeed;
    }
}

const bmw = new car(
    title = "BMW",
    model = "M8",
    color = "White",
    maxSpeed = 680
); //instance car
console.log(bmw);
bmw.startEngine();

const boing = new airplane(
    title = "BOEING",
    model = "777x",
    color = "white",
    type = "delivery",
    capacity = "305 - 355"
)//instance airplane
console.log(boing);





//ИНКАПСУЛЯЦИЯ

class car {
    constructor(title, model, color) {
        this.title = title;
        this.model = model;
        this.color = color;
    }
}


class airplane extends transport {
    constructor(title, model, color, maxSpeed, speed) {
        super(title, model, color);
        this.maxSpeed = maxSpeed;
        this.speed = speed;
    }
    _curentSpeed = 0;

    _curentSpeed() {
        console.log("Current speed: ${this._curentSpeed}")
    }

    gas() {
        if (this._curentSpeed >= this.maxSpeed) {
            console.log(
                "Max Speed on car ${this.title} ${this.model}: %{this.maxSpeed}"
            );
        } else {
            this._curentSpeed += this.speed;
            console.log("Current speed: ${speed.currentSpeed"});
    }
}

break(){
    this._curentSpeed -= this.speed;
    this.currentspeed();
}

const mersedes = new car(
    title = "MERSEDES",
    model = "S class",
    color = "White",
    maxSpeed = 580,
    speed = 30
)//instance car

mersedes.gas();
mersedes.gas();
mersedes.gas();
mersedes.gas();
mersedes.gas();//увеличивается

mersedes.break();
mersedes.break();
mersedes.break();
mersedes.break();//уменьшается


