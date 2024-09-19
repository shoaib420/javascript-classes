import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { useNavigate } from 'react-router-dom';

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
        </Container>
      </Navbar>
    
    </>
  );
}

export default ColorSchemesExample;