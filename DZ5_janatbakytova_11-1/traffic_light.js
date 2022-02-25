const button = document.getElementById('get')
const color = prompt("Choose the type of color: Green, Red or Yellow?")

const element1 = document.getElementById("red");
const element2 = document.getElementById("yellow");
const element3 = document.getElementById("green");


if (color === "Red") {
    element1.style.background = "red";
    alert("Stop if you don't want the car hit!!")
}
else if (color === "Yellow") {
    element2.style.background = "yellow";
    alert("Get ready to cross the road!")
}
else if (color === "Green") {
    element3.style.background = "green"
    alert("Go where you want!")
}
else alert("Undefined a color!");

button.onclick = () => {
    const color = prompt("Choose the type of color: Green, Red or Yellow?")
}


// const next = document.getElementsByClassName(".trafficlight");
// next.onclick = function(){
//     color.repeat
// }
// const next = document.getElementById("button")
// button.onclick = function (){
//     repeat.color
// };