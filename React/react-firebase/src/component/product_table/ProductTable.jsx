import React, { useContext } from 'react'
import Table from 'react-bootstrap/Table';
import Button from 'react-bootstrap/Button';
import { NavLink } from 'react-router-dom';
import myContext from '../../context/data/myContext';
const ProductTable = () => {
  const context = useContext(myContext)
  const {allProducts, deleteProduct, editProductHandle, } = context;
  // console.log(allProducts);
  return (
    <div style={{width:"80%", margin:'10%', textAlign:'center', alignContent:"center"}}>
         <Table striped bordered hover>
      <thead>
        <tr>
          <th>#</th>
          <th>  Product Image </th>
          <th>Product Name </th>
          <th>Price </th>
          <th> category </th>
          <th>Action </th>
          <th>Action</th>
        </tr>
      </thead>
      <tbody>
       {allProducts.map((item , index)=>{
        {/* console.log(item) */}
        const {title, price , category , imageUrl} = item;
        return(
          <tr key={index}>
          <td>{index + 1}</td>
          <td><img width={70} src={imageUrl} /> </td>
          <td>{title}</td>
          <td>{price}</td>
          <td>{category}</td>
          <td> <Button 
          onClick={()=> deleteProduct(item)}
           style={{width:'80px'}} variant="danger">Delete</Button></td>
          <td> <NavLink to={"/updateproduct"}>
          <Button 
          onClick={()=> editProductHandle(item)}
           style={{width:'80px'}} variant="success">Edit</Button>
          </NavLink>
          </td> 
         
        </tr>
        )
       })}
        
      </tbody>
    </Table>
    </div>
  )
}

export default ProductTable