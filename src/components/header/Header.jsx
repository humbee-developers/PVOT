import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import logo from "./Mask.png"
import 'bootstrap/dist/css/bootstrap.min.css';
import "./header.css"
const Header = () => {
  return (
    <div>
    
    <div className="hero" style={{backgroundColor:"black"}}>
    <Navbar expand="lg" className="" >
    <Container>
      <Navbar.Brand className='brand' href="#home">PVOT</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="" style={{marginLeft:"auto"}}>
        <Nav.Link href="#home" style={{backgroundColor:'white'}}>
        <img src={logo} alt="" />
        </Nav.Link>
          <Nav.Link href="#link">Know Us</Nav.Link>
          <Nav.Link href="#link">Services</Nav.Link>
          <Nav.Link href="#link">Portfolio</Nav.Link>
          <Nav.Link href="#link">Media</Nav.Link>
          <Nav.Link href="#link">Career</Nav.Link>
          <Nav.Link href="#link">Contact Us</Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Container>
  </Navbar>
    </div>
    
    </div>
  )
}

export default Header