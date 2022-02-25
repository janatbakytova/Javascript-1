// get elements in DOM

const blocks = document.getElementsByClassName(classnames = "block");
console.log(blocks);

const block3 = document.getElementById(elementId = "block3");
console.log(block3);

block3.classname = "changedclass";
console.log(block3);

block3.classList.add("changedclass");
block3.classList.remove(tokens = "newclass");
console.log(block3.classList);

block3.oneclick = () => {
    block3.classList.toggle(token = "active");
} //css

const block1 = document.querySelector(selector = ".block"); //selectors write with point
const blocks1 = document.querySelectorAll(selector = ".block");
console.log(block1);

console.log(block.attribute[0].name); //[0].value

const button = document.getElementById(elementId = "button");
button.oneclick = (event = MouseEvent) => {
    console.log(event);
}
button.oneclick = () => {
    console.log("clicked");
}

InputEvent.onchange = (event = Event) => {
    console.log(event);
    console.log(event, target);
    console.log(event, target.value);
}

button.addEventListener(type = "click", listener = (e = MouseEvent) > {
    console.log(e)
})

InputEvent.addEventListener(type = "change", listener(e = Event) => {
    console.log(e.target.value)
})


function CreateNewDiv() {
    const div = document.createElement(tagname = "div");
    div.SetAttribute(qualifiedname = "class", value = "block");
    div.innerText = input.value;
    document.value.append(div);
}