// let mypara = document.getElementById("para");
// mypara.innerText = "hello world "
// console.log(mypara);


let student1 = []
// console.log(student1);


function students() {
    let std =  {

        name: prompt("inter your name "),
        cnic: +prompt("inter your card num "),
        language: prompt("inter your language "),
        class: prompt("inter your class")
    }
       student1.push(std);
       let stringfly = JSON.stringify(student1);
         localStorage.setItem("stringfly" , stringfly)   
        console.log(student1);
}

// let person = {
//     name : "wasif ", 
//     fname : "abdullah ",
//     rollnimber : 754
// } 

// person.name = "shoaib",
// delete person.rollnimber
// console.log(person);
 

// localStorage.setItem("name " , "ali ");


// let mypara = document.getElementById("para");
// mypara.innerText = "hello pakistan " 
// mypara.style.background = "green"
// mypara.style.color = "white "
// console.log(mypara);


let paragraphs = document.querySelectorAll("p");

alert(paragraphs[0].nodeName);
