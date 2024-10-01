import React, { useContext } from 'react'
import Table from 'react-bootstrap/Table';
import Button from 'react-bootstrap/Button';
import { NavLink } from 'react-router-dom';
import myContext from '../../context/data/myContext';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
const ProductTable = () => {
  const context = useContext(myContext)
  const {allProducts, deleteProduct, editProductHandle, search, setSearch } = context;
  // console.log(allProducts);
  const alProductFilter = allProducts.filter((obj)=> obj.title.toLowerCase().includes(search))
  return (
<>
<InputGroup className="mb-3">
        {/* <InputGroup.Checkbox aria-label="Checkbox for following text input" /> */}
        <Form.Control
        value={search}
        onChange={(e)=> setSearch(e.target.value)}
         aria-label="Text input with checkbox" placeholder='search '  />
      </InputGroup>
  



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
       {alProductFilter.length > 0 ?  alProductFilter.map((item , index)=>{
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
       }) : <h1> product is not found </h1> }
        
      </tbody>
    </Table>
    </div>
    </>
  )
}

export default ProductTable