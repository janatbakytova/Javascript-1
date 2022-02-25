//ES5 vs ES6

//ES6
let a;
const b = 20;

//ES5
var c;


//string expression - интерполяция строк
const first_name = "Jack";
const last_name = "Barboro";

console.log(first_name + " " + last_name);
console.log(`${first_name} ${last_name}`);

const getfullname = (user) => {
    return `First name: ${user.first_name}\nlast_name: ${user.last_name}`;
}
const user = {
    first_name: "Jack",
    last_name: "Barbaro"
}
console.log(getfullname(user));


//spread operator - ...
const mass = [1, 2, 3, 4, 5];
// const obj = {
//     username: "Jack",
//     age = 19,
//     last_name: "Barbaro",
//     full_name: "Jack Barbaro"
// }
const mass2 = [{ ...obj }];
console.log(mass2);

for (let i = 0; i < mass.length; i++) {

    mass2.push(mass[i]);
    const mass2 = [...mass];
}
console.log(mass2);
const props = {
    onsubmit: () => {
        {
            key: "value"
        }
        {
            key: "value"
        }
        {
            key: "value"
        }
    }
},
const { data, onsubmit } = props;
console.log(data);
onsubmit();
