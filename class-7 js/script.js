//console.log("hello stuents ");

// let num = [1,234,5,6,7,8,9,900,0];
// let num2 = num.slice(2,6);
// console.log(num);
// console.log(num2);

// let name = [];

// for(let i = 1; i < 100; i++){
//     name.push("hello")
// }
// console.log(name);

// let name = ["zaheer", "muhammad-ali ", "wasif", "Ali", "noman"];

// for (let elem in name){
//     console.log(elem);
// }

// let name = ["zaheer", "muhammad-ali ", "wasif", "Ali", "noman"];

// for (let elem of name){
//     console.log(elem);
// }

// let arr = ["zaheer", "muhammad-ali ", "wasif", "Ali", "noman" , "zaheer", "muhammad-ali ", "wasif", "Ali", "noman"];

// arr.forEach(function(val, index ){
// console.log( val, index);
// })

// array filter 


//  let filterarr = [1,2,3,4,5,6,7,8];

// let arr = filterarr.filter(function(val){
    
//     if(val% 2 != 0){
//         return true
//     }else{
//         return false
//     }
// })
// console.log(arr);
// console.log(filterarr);

//  let arr = [10,9,11, 1, ,5,7,6,3, 0,4,67,8,9,9,0,0,9,8,7,1,1,1,1,233,4,5,6];
//  console.log(arr);

//  let arrsort = arr.sort(function(a, b){
//     if(a > b  ){
//         return 1 
//     }else {
//         return -1
//     }
//  }) 


//  console.log(arrsort);

let arr = [10,9,11, 1, ,5,7,6,3, 0,4,67,8,9,9,0,0,9,8,7,1,1,1,1,233,4,5,6];

let a = arr.reduce(function ( preval , currval){
    return preval + currval ;
})

console.log(a);