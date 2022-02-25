// let triangle = "*";
// while (triangle.length <= 7) {
//     console.log(triangle + "\n");
//     triangle += "*";
// }
let triangle = "*";
    a = 0,
    b = 0,
    size = 7,
    board = " ",
    out = " ";

while (a < size - 1) {
    out += " ";
    a++;
}

while (b < size) {
    board += "* ";
    console.log(out, board);
    out = out.substring(0, out.length - 1);
    b++;
}