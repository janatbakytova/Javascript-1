// 1: Абстрактный класс

class Animal {
    constructor(type, gender, color, extinct, voicetext) {
        this.type = type;
        this.gender = gender;
        this.color = color;
        this.extinct = extinct;
        this.voicetext = voice;
    }

    voice() {
        console.log(this.voicetext);
    }
}

// 2: Наследование

class Dog extends Animal {
    constructor(type, gender, color, extinct, voicetext, name, purpose) {
        super(type, gender, color, extinct, voicetext);
        this.name = name;
        this.purposetext = this.purposetext;
    }

    purpose() {
        console.log(`Dog: ${this.name}\nPurpose: ${this.purposetext}`);
    }
}

const rex = new Dog(type = domestic, gender = male, color = black, extinct = false, voicetext = gavgav)

const rex = new Dog(
    type = "domestic",
    gender = "female",
    color = "white",
    extinct = "false",
    voicetext = "meow",
    name = "rex",
    purposetext = "security"
); //instance class Dog
rex.purpose();


const bublik = new Dog(
    type = "domestic",
    gender = "female",
    color = "white",
    extinct = "false",
    voicetext = "meow",
    name = "bublik",
    purposetext = "accessorry"
);
bublik.purpose();
// console.log(bublik);
// console.log();

const sharik = new Dog(
    type = "wilds",
    gender = "male",
    color = "grey",
    extinct = "false",
    voicetext = "tyaf tyaf",
    name = "sharik",
    purposetext = "hunter"
);//Instance class Dog
sharik.purpose();
