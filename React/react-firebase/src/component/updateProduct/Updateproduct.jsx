import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { NavLink } from 'react-router-dom';
import myContext from '../../context/data/myContext';
import { useContext } from 'react';

function  Updateproduct() {
  const context = useContext(myContext);
  // console.log(context);
  const {products, setProduct , editproduct} = context;
  return (
  <div >
   <div style={{height:'400px, width:"30%', alignItems:"center"}}>
   <NavLink to={'/'}>
   <h1>
    Add Product 
   </h1>
   </NavLink>
  
 
   <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
        <Form.Label>Product Title</Form.Label>
        <Form.Control
        value={products.title}
        onChange={(e)=> setProduct({...products, title: e.target.value})}
         type="text" placeholder="Product Title " />
      </Form.Group>
      <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
        <Form.Label>Product Price </Form.Label>
        <Form.Control 
                value={products.price}
                onChange={(e)=> setProduct({...products, price: e.target.value})}
        type="text" placeholder="Product Price" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
        <Form.Label>ImageUrl</Form.Label>
        <Form.Control
                value={products.imageUrl}
                onChange={(e)=> setProduct({...products, imageUrl: e.target.value})} type="text" placeholder="ImageUrl" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
        <Form.Label>Product category</Form.Label>
        <Form.Control 
                value={products.category}
                onChange={(e)=> setProduct({...products, category: e.target.value})}
        type="text" placeholder="Product category" />
      </Form.Group>
      <Button style={{width:"80%"}} onClick={ ()=> editproduct()} variant="secondary">update  Product</Button>{' '}
  
   </div>
  </div>
  );
}

export default Updateproduct;