class transport {
    constructor(title, type, color, model) {
        this.title = title,
            this.type = type,
            this.color = color,
            this.model = model
    }
    startEngine() { //startengine - запустить двигатель
        if (this.title.tolowercase() === "lexus") {
            return console.log("Engine creaked on $(this.title")
        }
        console.log(`title: ${this.title}\nPurpose: ${this.purposetext}`);
    }
}
class Car extends Transport { //extends - унаследоваться
    constructor(title, type, color, model, volume, maxspeed) {
        super(title, type, color, model);
        this.volume = volume,
            this.maxspeed = maxspeed;
    }
}

const bmw = new Car(
    title = "BMW",
    type = "sedan",
    color = "m5 blue",
    model = "e38 v12",
    volume = 5.0,
    maxspeed = 400
) // instance class Car

const lexus = new Car(
    title = "LEXUS",
    type = "jaep",
    color = "pink",
    model = "LX670",
    volume = 4.8,
    maxspeed = 148
)//instance class car
lexus.startEngine();

