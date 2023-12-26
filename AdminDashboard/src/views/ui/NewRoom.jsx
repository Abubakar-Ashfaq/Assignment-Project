import {
  Card,
  Row,
  Col,
  CardTitle,
  CardBody,
  Button,
  Form,
  FormGroup,
  Label,
  Input,
  FormText,
} from "reactstrap";
import React from "react";
import axios from "axios";

function NewRoom() {
  const initialFormData = Object.freeze({
    roomno: "",
    floorno: "",
    roomtype: "",
    roomdescription: "",
    roomprice: "",
    roomcapacity: "",
    file: {},
  });

  const [formData, updateFormData] = React.useState(initialFormData);
  const handleChange = (e) => {
    updateFormData({
      ...formData,

      // Trimming any whitespace
      [e.target.name]: e.target.value.trim(),
    });
  };

  let form = new FormData();
  const handleSubmit = async (e) => {
    e.preventDefault();

    form.append("roomno", formData.roomno);
    form.append("floorno", formData.floorno);
    form.append("roomtype", formData.roomtype);
    form.append("roomdescription", formData.roomdescription);
    form.append("roomprice", formData.roomprice);
    form.append("roomcapacity", formData.roomcapacity);
    form.append("file", formData.file[0]);
    AddNewRoom(form);
   
  };
  
  async function AddNewRoom(form) {
    await axios
      .post("http://localhost:4000/roomslist/", form, {
        headers: {
          "Content-Type": "multipart/form-data",
          "Authorization": localStorage.getItem("token")
          ? `${localStorage.getItem("token")}`
          : ""

        },
      })
      .then((res) => {
        alert("Room Added Successfully");
        window.location.reload();
      });
  }
  const isDisabled =
    !formData.roomno ||
    !formData.floorno ||
    !formData.roomtype ||
    !formData.roomdescription ||
    !formData.roomprice;
  return (
    <Row>
      <Col>
        <Card>
          <CardTitle tag="h6" className="border-bottom p-3 mb-0">
            <i className="bi bi-bell me-2"> </i>
            Add New Room
          </CardTitle>
          <CardBody>
            <Form>
              <FormGroup>
                <Label for="roomno">Room No</Label>
                <Input name="roomno" type="text" onChange={handleChange} />
              </FormGroup>
              <FormGroup>
                <Label for="roomno">Room Capacity</Label>
                <Input
                  name="roomcapacity"
                  type="text"
                  onChange={handleChange}
                />
              </FormGroup>

              <FormGroup>
                <Label for="floorno">Floor No</Label>
                <Input name="floorno" type="select" onChange={handleChange}>
                  <option label="Floor Level"></option>
                  <option>1</option>
                  <option>2</option>
                  <option>3</option>
                </Input>
              </FormGroup>
              <FormGroup>
                <Label for="roomtype">Room Type</Label>
                <Input name="roomtype" type="select" onChange={handleChange}>
                  <option label="Select"></option>
                  <option>Delux</option>
                  <option>Non-Delux</option>
                </Input>
              </FormGroup>
              <FormGroup>
                <Label for="roomdescription">Room Description</Label>
                <Input
                  name="roomdescription"
                  type="text"
                  onChange={handleChange}
                />
              </FormGroup>
              <FormGroup>
                <Label for="roomprice">Room Price</Label>
                <Input name="roomprice" type="text" onChange={handleChange} />
              </FormGroup>
              <FormGroup>
                <Label for="exampleFile">File</Label>
                <Input
                  id="exampleFile"
                  name="file"
                  type="file"
                  onChange={(e) =>
                    updateFormData({
                      ...formData,
                      [e.target.name]: [e.target.files[0]],
                    })
                  }
                />
                <FormText>
                  This is some placeholder block-level help text for the above
                  input. It's a bit lighter and easily wraps to a new line.
                </FormText>
              </FormGroup>
              <FormGroup tag="fieldset">
                <legend>AC Avalaible</legend>
                <FormGroup check>
                  <Input name="radio1" type="radio" /> <Label check>Yes</Label>
                </FormGroup>
                <FormGroup check>
                  <Input name="radio1" type="radio" /> <Label check>No</Label>
                </FormGroup>
              </FormGroup>
              <Button onClick={(e) => handleSubmit(e)} disabled={isDisabled}>
                Add New Room
              </Button>
            </Form>
          </CardBody>
        </Card>
      </Col>
    </Row>
  );
}

export default NewRoom;
