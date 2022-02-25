//Написать функцию и назвать ее twomass и передать 2 аргумента array и сравнить их длину.

const array1 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const array2 = [1, 2, 3, 4, 5,];

let a = array1.length
let b = array2.length


function twomass(a, b) {
    if (a > b) {
        alert("The first array is larger than the second!")
    }
    else if (a < b) {
        alert("The second array is larger than the first!")
    }
    else {
        alert("Both of them are equal!")
    }
}

twomass(a, b);