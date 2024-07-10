
const signup = async (e)=>{
    e.preventDefault()
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;
    // console.log(email, password);

 try {
    const result = await firebase.auth().createUserWithEmailAndPassword(email, password);
    console.log(result);
    alert(`wellcom ${result.user.email}`)
 } catch (error) {
    console.log(error);
    alert(error.message)
 }

}

const login = async (e)=>{
   e.preventDefault()
   const email = document.getElementById("login_email").value;
   const password = document.getElementById("login_password").value;
   // console.log(email, password);

try {
   const result = await firebase.auth().signInWithEmailAndPassword(email, password);
   console.log(result);
   alert(`user is successfully login ${result.user.email}`)
} catch (error) {
   console.log(error);
   alert("plz check your password ")
}

}