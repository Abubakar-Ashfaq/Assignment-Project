import React from 'react'
import { Navbar, Nav, Container } from 'react-bootstrap'
import { Button } from 'react-bootstrap'
import './navbar.css'
function navbar() {

  return (
 <Navbar className='nav' collapseOnSelect expand="lg">
  <Container>
  <Navbar.Brand href="#home" id='navitem'>Hostel Book</Navbar.Brand>
  <Navbar.Toggle aria-controls="responsive-navbar-nav"/>
  <Navbar.Collapse id="responsive-navbar-nav" style={{backgroundColor:"white"}}>
    <Nav className="mx-auto">
      <Nav.Link id='navitem' href="/">Home</Nav.Link>
      
      <Nav.Link id='navitem' href="/About">About</Nav.Link>
      <Nav.Link id='navitem' href="/rooms">Rooms</Nav.Link>
      <Nav.Link id='navitem' href="/feedback">FeedBack</Nav.Link>
    </Nav>
    <Nav>
      <Nav.Link id='navbuttons' href="/login">
        <Button variant="outline-primary">Login</Button>
      </Nav.Link>
      <Nav.Link id='navbuttons' href="/signup">
        <Button variant="outline-primary">SignUp</Button>
      </Nav.Link>
    </Nav>
  </Navbar.Collapse>
  </Container>
</Navbar>
 
 )
}

export default navbar









   /* <Navbar className='nav' collapseOnSelect>
    <Container>
    <Navbar.Brand id='brand' href="#home">HostelBook</Navbar.Brand>
    <Nav className="mx-auto">
      <Nav.Link id='navitem' href="/">Home</Nav.Link>
      <Nav.Link id='navitem' href="#features">Contact us</Nav.Link>
      <Nav.Link id='navitem' href="#pricing">Location</Nav.Link>
      <Nav.Link id='navitem' href="/rooms">Rooms</Nav.Link>
    </Nav>
    <Nav className="customright mr-auto">
      <Nav.Link id='navitem' href="#">Login</Nav.Link>
      <Nav.Link id='navitem' href="#">Register</Nav.Link>
    </Nav>
    </Container>
  </Navbar>  */