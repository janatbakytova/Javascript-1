const a = "Hello!";

function f1() {
    console.log("Hello!");
}



const a = "1";
let b = 2;

for(let key of []){
    console.log(key)
}

while(1 < 0){

}

if(a===a){

}


function sayhello(){
    console.log("Hello!");
}
sayhello();


function getfullname(user, age){
console.log(user, age);
}
const user = {
    firstname: "Jack",
    lastname: "Barbaro"
}
const user2 = {
    firstname: "Vito",
    lastname: "Scarlette"
}
console.log(user.firstname, user.lastname);
console.log(user2.firstname, user2.lastname);


getfullname(user, 23);


// анонимная функция
const anonymous = function (){
    console.log("nothing");
}
anonymous();

functionhuman(height, weight, gender){
    this.height = height
}




function getfullname(user,cb){
    console.log(user.firstname, user.lastname);
    cb();
}
function callback(){
    console.log("i`am call Back!")
}
const user = {
    firstname: "Jack",
    lastname: "Barbaro",
}
getfullname(user, callback);


const test = function(message, cb){
    cb(message);
}
test(message "Hello!", cb function(text){
    console.log(text);
});

const input = document.getElementById(elementid: "number");
const button = documet.getElementById(elemenetid: "button");

button.onclick = function (){
    // console.log(input.value);
    if(input.value % 2 ===) {
        console.log("Чётное");
    } else {
        console.log("Не чётное");
    }
}
