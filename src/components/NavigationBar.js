import React from 'react'
import {
  Navbar,
  Nav,
  Form,
  FormControl,
  Button,

} 
from 'react-bootstrap'

const NavigationBar = () =>{
  return(
    <div classsName="Navigation">
    <Navbar collapseOnSelect expand="lg" bg="white" variant="light" fixed="top">
    <img src="http://cdainterview.com/rw_common/images/bemo-logo2.png" width="167" height="100" alt="Site logo"></img>
    <Navbar.Brand href='/'></Navbar.Brand>
    <Navbar.Toggle aria-controls="responsive-navbar-nav " />
    <Navbar.Collapse id="responsive-navbar-nav">
      <Nav className="mr-auto">
      </Nav>
      <Nav>
        <Nav.Link href="/">Main</Nav.Link>
        <Nav.Link href="/howtoprepare">How To Prepare</Nav.Link>
        <Nav.Link href="/cdu">CDA Interview Questions</Nav.Link>
        <Nav.Link href="/Contact">Contact Us</Nav.Link>
      </Nav>
      <Form inline>
      <FormControl type="text" placeholder="Search" className="mr-sm-2" />
      <Button variant="outline-info">Search</Button>
    </Form>
    </Navbar.Collapse>
  </Navbar>
    </div>
  )
}

export default NavigationBar