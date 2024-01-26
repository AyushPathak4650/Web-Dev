// 10% of the time the calculator will change the operators as follows
// +  ---> -
// *  ---> +
// -  ---> /
// /  ---> **
// ** ---> *

function calculator(a, b, op) {
    let f = Math.random();
    if (op == "+")
        if (f > 0.1) {
            console.log(a + b);
        } else {
            console.log(a - b);
        }
    if (op == "*")
        if (f > 0.1) {
            console.log(a * b);
        } else {
            console.log(a + b);
        }
    if (op == "-")
        if (f > 0.1) {
            console.log(a - b);
        } else {
            console.log(a / b);
        }
    if (op == "/")
        if (f > 0.1) {
            console.log(a / b);
        } else {
            console.log(a ** b);
        }
    if (op == "**")
        if (f > 0.1) {
            console.log(a ** b);
        } else {
            console.log(a * b);
        }
}

calculator(2, 3, "+");
calculator(2, 3, "+");
calculator(2, 3, "+");
calculator(2, 3, "+");
calculator(2, 3, "+");
calculator(2, 3, "+");
calculator(2, 3, "+");
calculator(2, 3, "+");
calculator(2, 3, "+");
calculator(2, 3, "+");
