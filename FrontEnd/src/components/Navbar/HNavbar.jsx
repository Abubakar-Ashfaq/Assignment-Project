import React from "react";
import { Navbar, Nav, Container } from "react-bootstrap";
import { Button } from "react-bootstrap";
import "./navbar.css";
import { useState, useEffect } from "react";
import UserLogin from "../Modal/UserLogin";
import {NavLink} from 'react-router-dom';
function HNavbar() {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const [loggedIn, setLoggedIn] = useState(false);
  useEffect(() => {
    if (
      localStorage.getItem("user") === "user" ||
      localStorage.getItem("user") === "admin"
    )
      setLoggedIn(true);
  }, []);
  function ModalPopup(e) {
    e.preventDefault();
    handleShow();
  }
  function ClearLog() {
    localStorage.clear();
    window.location.reload();
  }
  function NavigatetoSignup() {
    window.location.href = "/register";
  }
  return (
    <div>
      <Navbar className="nav" collapseOnSelect expand="lg">
        <Container>
          <NavLink className="navbar-brand" to="/" id="navitem" style={{ fontSize: "1.5rem" }}>
            Hostel Book
          </NavLink>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse
            id="responsive-navbar-nav"
            style={{ backgroundColor: "white" }}
          >
            <Nav className="mx-auto">
              <NavLink id="navitem" to="/">
                Home
              </NavLink>
              <NavLink id="navitem" to="/rooms">
                Rooms
              </NavLink>
              <NavLink id="navitem" to="/contactus">
                Contact us
              </NavLink>
              <NavLink id="navitem" to="/about">
                About
              </NavLink>
            </Nav>
            <Nav>
                {
                loggedIn ? 
                (
                  <Button variant="outline-primary"style ={{height:"fit-content",marginTop:"9px"}} onClick={ClearLog}>
                    Logout
                  </Button>
                ) : (
                  <Button id="loginbutton" style ={{height:"fit-content",marginTop:"9px"}}variant="outline-primary" onClick={ModalPopup}>
                    Login
                  </Button>
                )}
              <Nav.Link id="navbuttons" href="/register">
                <Button variant="outline-primary" onClick={NavigatetoSignup}>
                  SignUp
                </Button>
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      {/* Conditional Rendering */}
      {show ? <UserLogin handler={handleClose} /> : null}
    </div>

  );
}

export default HNavbar;
