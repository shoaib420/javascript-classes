// let person1 = {

//      name : " wasif",
//      cnic : 87563437674,
//      language : " sindhi ",
//      class : 'javascipt' ,
//       speck : function (stuents){ 
//         console.log( stuents + this.name );

//       }
// }
// let person2 = {

//     name : " abdullah", //property
//     cnic : 87563437674, // key 
//     language : " sindhi ",
//     class : 'javascipt' ,
//      speck : function (stuents){ 
//        console.log( stuents + this.name );

//      }
// }
//  person1.speck(" hello i m  ");
//  person2.speck(" hello i m  ")



// let person1 = {

//      name : " wasif",
//      cnic : 87563437674,
//      language : " sindhi ",
//      class : 'javascipt' ,
//       speck : function (stuents){ 
//         console.log( stuents + this.name );

//       }
// }
// let person2 = {

//     name : " abdullah", //property
//     cnic : 87563437674, // key 
//     language : " sindhi ",
//     class : 'javascipt' ,
//      speck : function (stuents){ 
//        console.log( stuents + this.name );

//      }
//     }

//     let students = [
//         person1 , person2
//     ];
//     console.log(students);


function students (){
    return {

            name : prompt("inter your name "),
            cnic : +prompt("inter your card num "), 
            language : prompt("inter your language "), 
            class : prompt("inter your class")
           
        
             }
}


let student1 = [students( )];
console.log(student1);