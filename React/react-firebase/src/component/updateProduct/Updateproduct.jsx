import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { NavLink } from 'react-router-dom';

function  Updateproduct() {
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
        <Form.Control type="text" placeholder="Product Title " />
      </Form.Group>
      <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
        <Form.Label>Product Price </Form.Label>
        <Form.Control type="text" placeholder="Product Price" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
        <Form.Label>ImageUrl</Form.Label>
        <Form.Control type="text" placeholder="ImageUrl" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
        <Form.Label>Product category</Form.Label>
        <Form.Control type="text" placeholder="Product category" />
      </Form.Group>
      <Button style={{width:"80%"}} variant="secondary">Update  Product</Button>{' '}

      
  
   </div>
  </div>
  );
}

export default Updateproduct;