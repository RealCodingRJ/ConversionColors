let r = Math.floor(Math.random() * 255);
let g = Math.floor(Math.random() * 255);
let b = Math.floor(Math.random() * 255);

let Colors ={
    red: r,
    green: g,
    blue: b
}


console.log("R: " + Colors.red)
console.log("G: " + Colors.green)
console.log("B: " + Colors.blue)


console.log( Colors.red.toString(16)
    + Colors.green.toString(16) + Colors.blue.toString(16));