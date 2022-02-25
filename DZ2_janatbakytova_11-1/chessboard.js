let chessboard = () => {
    const limit = 8
    let result = " "
    for (let a = 0; a < limit; a++) {
        for (let b = 0; b < limit; b++) {
            if (a % 2 !== 0) {
                result += b % 2 === 0 ? " " : "#"
            } else {
                result += b % 2 === 0 ? "#" : " "
            }
        }
        result += "\n"
    }
    return result
}
chessboard();
console.log(chessboard())