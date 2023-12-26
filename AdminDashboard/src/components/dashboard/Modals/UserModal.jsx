import { useState, React, useEffect, useMemo } from "react";
import Modal from "react-bootstrap/Modal";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import { FormGroup, Label, Input } from "reactstrap";
import ErrorHandle from "../../ErrorComponent/ErrorHandle";
import SuccessHandle from "../../SuccessComponent/SuccessHandle"
import axios from "axios";
import Aos from "aos";
import "aos/dist/aos.css";


function UserModal({ data, handler }) {
  const [show, setShow] = useState(true);
  const [Errormsg, setErrormsg] = useState("");
  const [Success, setSuccess] = useState("");
  
  const form = useMemo(()=> new FormData(),[])

  useEffect(() => {
    Aos.init({ duration: 300 });
    async function populateform(){
      
    form.append("name", data.name);
    form.append("email", data.email);
    form.append("password", data.password);
    form.append("role", data.role);
    }
    populateform();
  }, [data,form]);

  const handleClose = () => setShow(false);
  const commitchange = (e) => {
    form.set(e.target.name, e.target.value);
  };
 
  async function UpdateUser() {
      const updateduser=
      {
      name:form.get("name"),
      email:form.get("email"),
      password:form.get("password"),
      role:form.get("role"),
    }
    await axios
      .put("http://localhost:4000/users/"+data._id,updateduser,{
        headers:{
          Authorization: localStorage.getItem("token")
          ? `${localStorage.getItem("token")}`
          : "",
        }
      })
      .then((res) => {
        setSuccess(res.data);
      })
      .catch((err) => {
        setErrormsg(err.response);
      });

  }
  return (
    <Modal show={show} onHide={handleClose}>
      <Modal.Header closeButton onClick={handler}>
        <Modal.Title>User Details</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form>
          <FormGroup>
            <Label for="name">UserName</Label>
            <Input
              name="name"
              type="text"
              defaultValue={data.name}
              onChange={commitchange}
            />
          </FormGroup>
          <FormGroup>
            <Label for="email">Email</Label>
            <Input
              name="email"
              type="text"
              defaultValue={data.email}
              onChange={commitchange}
            />
          </FormGroup>
          <FormGroup>
            <Label for="role">Role</Label>
            <Input name="role" 
            type="select" 
            defaultValue={data.role}
            onChange={commitchange}>
              <option label="Select"></option>
              <option>user</option>
              <option>admin</option>
            </Input>
          </FormGroup>
        </Form>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={handler}>
          Close
        </Button>
        <Button variant="primary" onClick={UpdateUser}>
          Save Changes
        </Button>
      </Modal.Footer>
      <div style={{ position: "fixed", marginTop: "100px", marginLeft: "30px"}}>
        {Errormsg ? <ErrorHandle errormsg={Errormsg} /> : null}
        {Success ? <SuccessHandle successmsg={Success} /> : null}
      </div>
    </Modal>
  );
}

export default UserModal;
