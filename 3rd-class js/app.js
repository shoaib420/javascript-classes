// let num = null;
// console.log(num);

// comperison operators

// == ===
//  let num1 = 6;
//  let num2 = 6;
//  console.log(num1 == num2);

//  let num1 = 6;  //data type Number 
//  let num2 = '6'; // string
//  console.log(num1 == num2);

// let num1 = 6;  //data type Number 
// let num2 = 6; // string
// console.log(num1 === num2);

// != , !==

// let num1 = 6;  //data type Number 
// let num2 = 7; // string
// console.log(num1 != num2);

//  console.log("5" !== 5);

// < greater then 
// > less then 
//  console.log(5 < 7);

// let num = 55;
// let num2 = 66;
// console.log(num < num2);

// let num = 155;
// let num2 = 66;
// console.log(num > num2);

//  <= <==

// let num = 155;
// let num2 = 66;
// console.log(num >= num2);

// let num = 155;
// let num2 = 9999;
// console.log(num <= num2);



// let age = +prompt("inter your age");

// if( age >= 18  ){
//  console.log("you can apply cnic");
// }else{
//     console.log("you are not eligble")
// }

let userNum = +prompt("inter your number");
let computerNumber = Math.round(Math.random() * 5);

if(userNum === computerNumber){
    console.log(" you win ");
}else{
    console.log("you loss ! "  + computerNumber );
}