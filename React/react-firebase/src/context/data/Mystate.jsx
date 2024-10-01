import React, { useState , useEffect} from 'react'
import myContext from './myContext'

import { addDoc, collection, deleteDoc, doc, onSnapshot, orderBy, query, QuerySnapshot, setDoc, Timestamp } from 'firebase/firestore'
import { fireDB } from '../../firebase/FirebaseConfig'

const Mystate = (props) => {
   const [products , setProduct] =  useState({
    title:"",
    price: "",
    imageUrl:"",
    category:"",
    time: Timestamp.now(),
    date: new Date().toLocaleString(
        "en-US",
        {
            month:"short",
            day:"2-digit",
            year:"numeric"
        }
    )

})
const [allProducts, setAllProducts]  = useState([])

// add products 
const AddProduct = async()=>{
    if(products.title === "" || products.price === "" || products.imageUrl === "" || products.category === " "){
        return alert("require  ")
    }
    const productRef = collection(fireDB, "products");
    try {
        await addDoc(productRef, products)
        alert("product added successfull")
        setTimeout(()=>{
            window.location.href = '/'
        }, 1000)
    } catch (error) {
        console.log(error);
    }
}

// get products
 const getProduct = async ()=>{
    try {
        const q = query(
            collection(fireDB, "products"),
            orderBy("time")
        )
        const data = onSnapshot(q, (QuerySnapshot)=>{
            const productArray = [];
            QuerySnapshot.forEach((doc)=>{
                productArray.push({...doc.data(), id: doc.id})
            })
            setAllProducts(productArray)
        })
        return ()=> data
        
    } catch (error) {
       console.log(error); 
    }

 }
//  Edits product  function
const editProductHandle = (item)=>{
    setProduct(item)
}
// edits handle fuction 

const editproduct = async()=>{
    try {
        await setDoc(doc(fireDB, "products", products.id), products);
        getProduct()
        alert("product  updated successfully "  );
        setTimeout(()=>{
              window.location.href = "/"
        },800)
    } catch (error) {
        console.log(error);
    }
}

/// delete function handle 
const deleteProduct = async(item)=>{
    try {
        await deleteDoc(doc(fireDB, "products" , item.id))
        getProduct();
        alert("product is deleted")
    } catch (error) {
        console.log(error);
    }
}

 useEffect(() => {
getProduct()
 
  
 }, [])
 

  return (
    <div>
        <myContext.Provider value={{products, setProduct, AddProduct, 
        allProducts, editProductHandle, editproduct, deleteProduct }} >
   {props.children}
        </myContext.Provider>
    </div>
  )
}

export default Mystate