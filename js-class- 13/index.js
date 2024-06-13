// synchronous vs asynchronous 


// alert("hello students ");
// console.log('hello japs ');

// asynchronous  
//  setTimeout(function(){
//       console.log("hello javascript ")
//  }, 5000)

//   console.log("helolo pakistan ");

// callback function 
// function runaftsec (cbs){
//     setTimeout(function (){
//      console.log('abc ');
//      console.log(typeof cbs);
//     }, 1000)
// }
// function tobeexcute (){
//     console.log("done ");
// }

// runaftsec(tobeexcute)

// function runtime (abc, val, c  ){
//     setTimeout(function(){
//         let data = 5 + val + c
//         abc(data)
//     },1000)
// } 

// function tobeexcute (datatoget ){
//     console.log(" done ", datatoget );
// }
 
// runtime ( function tobeexcute (datatoget ){
//     console.log(" done ", datatoget );
// }, 99, 1  )

// function sum (a, b, c, vals ){
//     console.log(a + b + c + vals);
//     console.log(vals);

// }

// sum(2,9,10, 100)


//  promise 

// function runtime (val){
//     return new Promise((resolve) => {
//         setTimeout(function(){
//             let data = 5 + val
//             resolve(data)
//         }, 1000 )
//     })
// }
// runtime(5).then(function(data){
//     console.log(data);
// })

 // example 2 
  
// function runtime (val){
//     return new Promise((resolve) => {
//         setTimeout(function(){
//             let data = 5 + val
//             resolve(data)
//         }, 1000 )
//     })
// }
// runtime(5).then(function(data){
//     return runtime(data)
// }).then(function(data){
//     return runtime(data)
// }).then(function(data){
//     return runtime(data)
// }).then(function(data){
//     return runtime(data)
// }).then(function(data){
//  console.log(data)
// })

// async await

// function runtime (val){
//     return new Promise((resolve) => {
//         setTimeout(function(){
//             let data = 5 + val
//             resolve(data)
//         }, 1000 )
//     })
// }

// (async function (){
// //    let data = await runtime(10);
// //    console.log(data);
// let data = await runtime(10);
// let data1 = await runtime(data);
// let data2 = await runtime(data1);
// let data3 = await runtime(data2);
// let data4 = await runtime(data3);
// console.log(data4);
// })();



function runtime (val){
    return new Promise((resolve, reject ) => {
        setTimeout(function(){
            let data = 5 + val;
            if(data % 2 === 0 ){
                  resolve(data)
            }else{
                reject('ood number ')
            }
          
        }, 1000 )
    })
}
runtime(1)
.then(function(data){
   return  runtime(data);
}).catch(function(error){
    console.log(error);
})