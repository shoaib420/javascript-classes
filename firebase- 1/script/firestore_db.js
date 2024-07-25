//  const userDetails = document.querySelector("userDetails ")

// function createusercollection(user){
//     firebase.firestore().collection("user")
//     .doc(user.uid)
//     .set({
//         uid:user.uid,
//         name:user.displayName ,
//         email:user.email,
//         phone:"",
//         course:"",
//         portfolioURL:""
//     })

// }

// // async function usergetinfo(userid){
// //    if(userid){
// //     const userinfosnap = await firebase.firestore()
// //     .collection("user")
// //     .doc(userid)
// //     .get()

// //     const userinfo = userinfosnap.data()
// //     if(userinfo){
// //         userDetails.innerHTML = `
// //         <h3>my name  ${userinfo.name}</h3>
// //         <h3> ${userinfo.email}</h3>
// //         <h3> ${userinfo.phone }</h3>
// //         `
// //     }else{
// //         userDetails.innerHTML = `
// //         <h3> please login your account </h3>
       
// //         `
// //     }

// // }
// // }


// async function usergetinfoRealtime(userID){
//     if(userID){
//      const userdocRef = await firebase.firestore()
//      .collection("user")
//      .doc(userID)
//      userdocRef.onSnapshot((doc)=>{
//   if(doc.exists){
//     const userinfo  = doc.data()
//     if(userinfo){
//         userDetails.innerHTML = `
//         <h3>  ${userinfo.name}</h3>
//         <h3> ${userinfo.email}</h3>
//         <h3> ${userinfo.phone }</h3>
//         `
//     }
        
     
//      }
//     })}else{
//          userDetails.innerHTML = `
//          <h3> please login your account </h3>
        
//          `
//      }
      
   
   
 
//  }
 


const userDetial = document.querySelector(".userdetails")

function createusercollection(user){
 
    firebase.firestore().collection("users")
    .doc(user.uid)
    .set({
        uid:user.uid,
        name:user.displayName,
        email:user.email,
        phone:"",
        specialty:"",
        portfolioUrl:""
    })
}

async function getuserinfo(userID){

    if (userID) {
        const userInfoSnap = await firebase.firestore()
        .collection("users")
        .doc(userID)
        .get()
    
    
       const userinfo = userInfoSnap.data();
       if(userinfo){
        userDetial.innerHTML = `
        <h3>${userinfo.name}</h3>
        <h3>${userinfo.email}</h3>
        <h3>${userinfo.phone}</h3>
        `
       }
    } else {
         userDetial.innerHTML = `
        <h3>please login</h3>
        `
    }
 
}

async function getuserinfoRealtime(userID){

    if (userID) {
        const userdocRef = await firebase.firestore()
        .collection("users")
        .doc(userID)
        userdocRef.onSnapshot((doc)=>{
            if(doc.exists){
                const userinfo = doc.data();
                if(userinfo){
                 userDetial.innerHTML = `
                 <h3>${userinfo.name}</h3>
                 <h3>${userinfo.email}</h3>
                 <h3>${userinfo.phone}</h3>
                 `
                }
            }
        })
    
    
      
    } else {
         userDetial.innerHTML = `
        <h3>please login</h3>
        `
    }
 
}