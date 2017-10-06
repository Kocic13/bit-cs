
var a = 11;
var b = 4;
var c = 43;
var d = -1;
var e = -33;

if (a > b && a > c && a > d && a > e) {
    console.log("Najveci je " + a)
} else {
    if (b > c && b > d && b > e) {
        console.log("Najveci je " + b)
    } else {
        if (c > d && c > e) {
            console.log("Najveci je " + c)
        } else {
            if (d > e) {
                console.log("Najveci je " + d)
            } else {
                console.log("Najveci je " + e)
            }
        }
    }
}