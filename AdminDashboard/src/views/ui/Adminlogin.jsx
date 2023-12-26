import React from "react";
import { Button,Col,Row,Form } from "react-bootstrap";
import axios from "axios";
import { useState, useEffect } from "react";

function Adminlogin() {
  const [Errormsg, setErrormsg] = useState("");
  const [result, setResult] = useState();
  const [credentials, setCredentials] = useState({ email: "", password: "" });
  useEffect(() => {
    if (result) {
      if (localStorage.getItem("user") === "admin")
        window.location.href = "/starter";
    }
    setErrormsg("");
  }, [result]);

  useEffect(() => {
    localStorage.clear();
  }, []);

  const handleChange = (e) => {
    setCredentials({
      ...credentials,
      [e.target.name]: e.target.value.trim(),
    });}

  function Login(e) {
    e.preventDefault();
    var username = credentials.email;
    var password = credentials.password;
    var data = {
      email: username,
      password: password,
    };
    axios
      .post("http://localhost:4000/login", data,{
      })
      .then((res) => {
        if (res.data.user.role==="admin")  // check if token belongs to admin
        {
          console.log("Running admin login")  
          setResult(res.data);
          localStorage.setItem("token", res.data.token);
          localStorage.setItem("user", res.data.user.role);
        } else if(res.data.user.role==="user")  // if user tries to login
        {
          setErrormsg("You do not have admin access");
        }
        else  //if credentials are invalid
        {
          setErrormsg("Invalid credentials");
          console.log('message from login ')
          console.log(res.data)
        }
      })
      .catch((err) => {
        console.log(err);
      });
  }

  return (
    <div style={{display:"block"}}>
      <h1 className="shadow-sm text-success mt-5 p-3 text-center rounded">
        Admin Login
      </h1>
      <Row className="mt-5">
        <Col lg={5} sm={12} className="p-5 m-auto shadow-sm rounded-lg">
          <Form>
            <Form.Group controlId="username">
              <Form.Label>Email address</Form.Label>
              <Form.Control name="email"type="email" placeholder="Enter email" onChange={e=>handleChange(e)}/>
            </Form.Group>
     
            <Form.Group controlId="password">
              <Form.Label>Password</Form.Label>
              <Form.Control
              name="password"
                type="Password"
                placeholder="Enter Enter Password"
                onChange={e=>handleChange(e)}
              />
            </Form.Group>
            <br />
            <Button variant="success btn-block" onClick={(e) => Login(e)}>
              Submit
            </Button>
          </Form>
          <div style={{width:"25rem"}}>
        {Errormsg ? <p style={{color:"red"}}>{Errormsg}</p> : null}
        </div>
        </Col>
      </Row>
      
      <h6 className="mt-5 p-5 text-center text-secondary">
        Copyright @ 2022 Hostel Book.All Right Reserved.{" "}
      </h6>
     
       
    </div>
  );
}

export default Adminlogin;
