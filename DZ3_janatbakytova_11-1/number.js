//Сделать функцию котороя принимает 2 number аргумента и вычисляет какой из них меньше.

const func = (num1, num2) => {
    if (num1 > num2) {
        alert("The second number is less than the first!")
    }
    else if (num2 > num1) {
        alert("The first number is less than the second!")
    }
    else {
        alert("Both numbers are equal!")
    }
}

let number1 = prompt("Enter the first number!");
let num1 = Number(number1);

let number2 = prompt("Enter the second number!");
let num2 = Number(number2);

func(num1, num2)