import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { NavLink, useNavigate } from 'react-router-dom';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import InputGroup from 'react-bootstrap/InputGroup';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

function ColorSchemesExample() {
const user = JSON.parse(localStorage.getItem("user"))
console.log(user);
const navigate = useNavigate()
  const Logout=()=>{
    localStorage.clear("user")
    navigate("/login")

    
    

  }
  return (
    <>
      <Navbar bg="dark" data-bs-theme="dark">
        <Container>
          <Navbar.Brand href="#home">Navbar</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="/">Home</Nav.Link>
            
              {user &&  <Nav.Link onClick={Logout}> Logout</Nav.Link>}
            
            
          </Nav>
          <Row>
         
          <Col xs="auto">
          <NavLink to={"/addproduct"}>
            <Button type="submit">Add Product</Button>
            </NavLink>
          </Col>
        </Row>
        </Container>
      </Navbar>
    
    </>
  );
}

export default ColorSchemesExample;