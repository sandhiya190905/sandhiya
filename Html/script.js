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

var arr=[10,20,30,40,50]

for(var index in arr){
    console.log(index)
}
for(var key of arr){
    console.log(key)
}

var obj ={name :"keerthu",dept :"computer science"}
 for(var key in obj){
    console.log(key)
    console.log(obj[key])
 }

 var arr=[1,2,3,4,5]

 var arr2 =[...arr,6,7,8]

 console.log(arr2)

 var marks =[88,99,95,98,"fail"]
 var[m1,m2,m3,m4,m5] = marks;
 console.log(m1)
 console.log(m2)
 console.log(m3)
 console.log(m4)
 console.log(m5)

 function saybye(){
    console.log("bye")
 }
 function demo(name,callback){
    console.log("hello" + name)
    callback()
 }
 demo("keerthu",saybye);

 const btn=document.getElementById("btn1");

 btn.onclick = function(){
    window.open("https://www.instagram.com")
    
 }