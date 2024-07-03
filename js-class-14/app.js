// arrow function


// function add  (a,b,c){ // normal function 
//     return a + b + c
// }

// const subtrack = (a,b,c) =>{ // arrow function 
//     return a - b - c     
// }  

// const multply = ( x, y, z)=> x * y * z ;

// console.log(add(11, 11,11));

// console.log(subtrack(11, 11,11));


// console.log(multply(11, 11, 66));


// const obj = {
//  name : "saylani",

//  print : function(){
//     setTimeout(function(){ 
//         console.log(this.name);
//     }, 1000)
//  }

// }

// obj.print()

// const obj = {
//     name : "saylani",
//     last_name : "smit",
   
//     print : ()=>{
//       setInterval(function(){
//         console.log(this.name);
//       })
//     }
   
//    }
   
//    obj.print()



// function sum (x= 5,y=6 ,z=7){ // default parameter 
//    return x + y + z
// }

// console.log(sum(10,10,10));


//  function sum (x,y, ...z){
//     console.log(x,y,z );
//  }

//  sum(1,3,4,5,67,8,9900)

//  const first_Name = "shoaib "
//  const Course = "smit-trainer "

//  const ob= { // destructuring object 
//     first_Name,
//     Course,
//     print : function (){
//         console.log(this.first_Name, this.Course);
//     }
//  }
//  ob.print();

// const arr = ["shoaib ",' sir daniyal', "sir-zeeshan" ];

// const arr1 = ["some data ", ...arr, ]; // spread operators 
// console.log(arr1);


const obj1 = {
    name : "abdullah ",
    cast : "rind ",
    course : "wma "
}

const obj2 = {
    ...obj1,
    name:"shaoib"
}

console.log(obj2);