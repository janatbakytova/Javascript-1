for (let one = 1; one < 101; one++) {
    if (one % 15 == 0) console.log("FizzBuzz");
    else if (one % 3 == 0) console.log("Fizz");
    else if (one % 5 == 0) console.log("Buzz");
    else console.log(one);
}