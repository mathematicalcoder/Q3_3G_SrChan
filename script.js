
// code for the header
let s = "";
s += "<h1>Kaiser Chan, 9-Sr, 14 Feb 2025</h1>"; 
s += "<h2> Basic Calculator </h2>"

document.getElementById("header").innerHTML = s;

// custom functions and constants

const pi = Math.PI;
const e = Math.E;

function log(b,x) {
    return Math.log(x) / Math.log(b);
}

function abs(x) {return Math.abs(x);}
function sin(x) {return Math.sin(x);}
function cos(x) {return Math.cos(x);}
function tan(x) {return Math.tan(x);}

// function for the calculator buttons.

function insert(num) {
    textview.value = textview.value+num;
}
function clean() {
    textview.value = "";
}
function back() {
    const exp = textview.value;
    textview.value = exp.substring(0, exp.length-1);
}
function equal() {
    textview.value = eval(textview.value).toFixed(3);
}

