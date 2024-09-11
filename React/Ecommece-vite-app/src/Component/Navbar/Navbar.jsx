import { useContext } from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { FaRegSun } from "react-icons/fa";
import { IoIosSunny } from "react-icons/io";
import myContaxt from '../../Context/data/myContext';



function ColorSchemesExample() {
  const context = useContext(myContaxt);
  const {mode , toggleMode} = context;
  console.log(mode , toggleMode);
  return (
    <>
      <Navbar bg="light" data-bs-theme="light" >
        <Container style={{backgroundColor: mode === "dark" ? "rgb(40, 44, 52 " : '' , color : mode === "dark" ? "white": "",}}>
          <Navbar.Brand href="/">Navbar</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="#home" style={{color: mode === "dark" ? "white" : ""}}>Home</Nav.Link>
            <Nav.Link href="/order">order</Nav.Link>
            <Nav.Link href="/cart">Cart</Nav.Link>
            <Nav.Link href="/error">Error</Nav.Link>
            <Nav.Link href="#pricing">
            <button onClick={toggleMode}>
            {mode === "light" ? (
              <FaRegSun />
            ) : "dark" ? (

            < FaRegSun /> ) : ''}
            
            </button>
            </Nav.Link>
          </Nav>
        </Container>
      </Navbar>
  

      
    </>
  );
}

export default ColorSchemesExample;