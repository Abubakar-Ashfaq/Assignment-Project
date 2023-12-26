import React from "react";
import { Form, Button } from "react-bootstrap";
import axios from "axios";
import "./register.css";
import { toast } from "react-toastify";
function Register() {
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [name, setName] = React.useState("");

  function sign(e) {
    const user = {
      name: name,
      email: email,
      password: password,
    };

    axios
      .post( "http://localhost:4000"+"/addnewuser", user)
      .then((data) => {
        if (data.data.errormsg)
          toast.error(data.data.errormsg, {
            position: "top-center",
          });
        else {
          toast.success(data.data.message, {
            position: "top-center",
          });
        }
      })
      .catch((err) => {
        toast.error(err.response.data, {
          position: "top-center",
        });
      });
  }

  return (
    <div className="outerformdiv">
      <h2 style={{ paddingTop: "5%" }}>Create Account</h2>

      <Form className="Formc" style={{ textAlign: "center",width:"50%" }}>
        <Form.Group className="mb-3" controlId="formBasicName">
          <Form.Label>Name</Form.Label>
          <Form.Control
            type="name"
            placeholder="Enter Name"
            onChange={(e) => {
              setName(e.target.value);
            }}
            style={{ width: "50%", marginLeft: "25%" }}
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control
            type="email"
            placeholder="Enter email"
            onChange={(e) => {
              setEmail(e.target.value);
            }}
            style={{ width: "50%", marginLeft: "25%" }}
          />
          <Form.Text className="text-muted">
            We'll never share your email with anyone else.
          </Form.Text>
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control
            type="password"
            placeholder="Password"
            onChange={(e) => {
              setPassword(e.target.value);
            }}
            style={{ width: "50%", marginLeft: "25%" }}
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicCheckbox"></Form.Group>
        <Button variant="primary" onClick={sign}>
          SignUp
        </Button>
      </Form>
    </div>
  );
}
export default Register;
