const color = prompt("Choose type of color: Red, Yellow, Green!");

switch(color) {
    case "Green":
        alert("Go!")
    break;
    case "Red":
        alert("Stop!")
        break;
    case "Yellow":
        alert("Wait...")
        break;
    default:
        alert("Color is undefined!")
        break;
}
