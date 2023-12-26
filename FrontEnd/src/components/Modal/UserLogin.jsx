import { useState, React, useEffect, useMemo } from "react";
import Modal from "react-bootstrap/Modal";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import { FormGroup, Label, Input } from "reactstrap";
import 'react-toastify/dist/ReactToastify.css';
import {toast} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import axios from "axios";
import { useNavigate } from 'react-router-dom';



function UserLogin({ handler }) {
  let navigate=useNavigate();

  const [show, setShow] = useState(true);
  const [result, setResult] = useState(null);
  const [isEmail, setEmail] = useState(false);
  const [isPass, setPass] = useState(false);
  const form = useMemo(() => new FormData(), []);
  useEffect(() => {
    form.append("email", "");
    form.append("password", "");
 
  }, [form]);
  useEffect(() => {
    if(localStorage.getItem("token")==="user"||localStorage.getItem("token")==="admin")
      setShow(false);
  }, [result]);
  
  function routeChange()
  {
    let path = `/`;
    navigate(path);
    window.location.reload();
  }

  function ValidateModal() {
    if (form.get("email") === "") {
      setEmail(true);
      return false;
    }
    if (form.get("password") === "") {
      setPass(true);
      return false;
    }
    return true;
  }
  function Login(e) {
    if (ValidateModal()) {
      e.preventDefault();
      const user={
        email:form.get("email"),
        password:form.get("password")
      }
      axios
        .post(  "http://localhost:4000" + "/login", user)
        .then((res) => {
          console.log(res.data);
          if (res.data.token) 
          {
            setResult(res.data);
            localStorage.setItem("token", res.data.token);
            localStorage.setItem("user", res.data.user.role);
            handleClose();
            routeChange();

          } 
          else 
          {
            toast.error(res.data.message, {
              position: "top-center"});
          }
        })
        .catch((err) => {
          console.log(err);
        });
    }
  }
  const handleClose = () => setShow(false);
  const commitchange = (e) => {
    form.set(e.target.name, e.target.value);
  };

  return (
    <Modal show={show} onHide={handleClose}>
      <Modal.Header closeButton onClick={handler}>
        <Modal.Title>Login</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form>
          <FormGroup>
            <Label for="email">Email</Label>
            <Input
              name="email"
              type="text"
              required="required"
              defaultValue=""
              onChange={commitchange}
            />
            {isEmail ? (
              <Form.Text style={{ color: "red" }}>Email required</Form.Text>
            ) : null}
          </FormGroup>
          <FormGroup>
            <Label for="password">Password</Label>

            <Input
              name="password"
              type="password"
              defaultValue=""
              onChange={commitchange}
            />
            {isPass ? (
              <Form.Text style={{ color: "red" }}>Password required</Form.Text>
            ) : null}
          </FormGroup>
        </Form>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={handler}>
          Close
        </Button>
        <Button variant="primary" onClick={Login}>
          Login
        </Button>
      </Modal.Footer>
    </Modal>
  );
}

export default UserLogin;
