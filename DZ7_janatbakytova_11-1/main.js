// Сделать при помощи ОПП авторизацию, то есть сделать логин и регистрацию
// будет класс User в котором будет ключи username & age & password 
// будет метод login который будет проверять username и password на валидность

class User {
    constructor(name, password) {
        this.name = name;
        this.password = password;
    }

    login(name, password) {
        if (this.name === name && this.password === password) {
            console.log(this)
        }
        else {
            console.log("Try again, please!")
        }
    }
}

const wolf = new User("Damon", "150")
console.log(wolf)
wolf.login("Damon", "150");