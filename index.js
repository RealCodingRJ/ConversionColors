let r = Math.floor(Math.random() * 255);
let g = Math.floor(Math.random() * 255);
let b = Math.floor(Math.random() * 255);

class Conversion {
    r = 0;
    g = 0;
    b = 0;

    constructor(r, g, b) {

        this.r = r;
        this.g = g;
        this.b = b;

    }

    ToRGB() {
        console.log("R: " + r)
        console.log("G: " + g)
        console.log("B: " + b)

    }

    ToHex() {


        console.log( r.toString(16) +
            g.toString(16) + b.toString(16));

    }
}

const Color = new Conversion(r, g, b);

Color.ToRGB();
Color.ToHex();