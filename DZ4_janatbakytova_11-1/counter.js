let count = 0;

const counter = () => {
    const count_tag = document.getElementById("count");
    count_tag.innerText = count;
}
counter()

const morecount = () => {
    count++;
    counter();
}
morecount()

const lesscount = () => {
    count--;
    counter();
    if (count < 0) {
        alert("Nowhere else!")
        return (count++);
    }
}
lesscount();



// if (lesscount === 0);
// alert("Nowhere else!")

// const lesscount = () => {
//     if (lesscount > 0) {

//     }
//     else if (lesscount < 0) {
//         alert = "Nowhere else!";
//     }
// }
// lesscount();
