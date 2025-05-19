var a = 10;
var b = 10;
console.log(a)
console.log(b)
console.log(a + b)
console.log(a - b)
console.log(a * b)
console.log(a / b)
console.log(a % b)
console.log(a & b)
console.log(a <= b)
console.log(a >= b)
console.log(a < b)
console.log(a > b)
function add() {
    var a = 10;
    var b = 30;
    console.log(a = +b)
}
add()
function add(a, b) {
    console.log(a + b)

}
add(20, 30)
add(50, 30)
add(10, 30)

var a = 5;
var b = 5;
console.log(a == b)
console.log(a != b)
console.log(a ^ b)

var a = 5;
console.log(a)
var b = 5;
console.log(b)
console.log(`${a}+${b}=${a + b}`)

n = 20;

if (n % 2 == 0) {
    console.log(`${n} is even`)
} else {
    console.log(`${n} is even`)
}

for (n = 1; n <= 10; n++) {
    if (n % 2 == 0) {
        console.log(`${n} is even`)
    } else {
        console.log(`${n} is even`)
    }
}
n = 1;
do {
    if (n % 2 == 0) {
        console.log(`${n} is even`)
    } else {
        console.log(`${n} is even`)
    }
    n++
} while (n <= 10);

n = 7
switch (n) {
    case 1:
        console.log("Sunday")
        break;
    case 2:
        console.log("Monday")
        break;
    case 3:
        console.log("Tuesday")
        break;
    case 4:
        console.log("Wednesday")
        break;
    case 5:
        console.log("Thursday")
        break;
    case 6:
        console.log("Friday")
        break;
    case 7:
        console.log("Saturday")
        break;
    default:
        console.log("Enter the valid number")
        break
}