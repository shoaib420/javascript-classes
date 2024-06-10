//let time = new Date();

//console.log(time);
// console.log(time.getFullYear());]
//console.log(time.getMilliseconds());
// console.log(time.getDate())

// time.setDate(25);
// time.setMonth(6);
// console.log(time);


// let exmday = new Date();

// exmday.setDate(25);
// exmday.setMonth(7);
// exmday.setHours(9);
// exmday.setMinutes(30);
// console.log(exmday);

let hoursElem = document.getElementById("hours");
let MinutessElem = document.getElementById("Minutes");
let SecondsElem = document.getElementById("Seconds");

setInterval(function(){
    let time = new Date();
    hoursElem.innerText = time.getHours();
    MinutessElem.innerText = time.getMinutes();
    SecondsElem.innerText = time.getSeconds()
}, 1000)