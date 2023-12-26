import React from "react";
import Container from "react-bootstrap/esm/Container";
import Row from "react-bootstrap/esm/Row";
import Col from "react-bootstrap/esm/Col";
import Googlemap from "./GoogleMap";
import "./locationdivstyle.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faClock,
  faLocation,
  faMessage,
  faPhone,
} from "@fortawesome/free-solid-svg-icons";

function Location() {
  return (
    <div>
      <Container className="locationdiv" sm={7}>
        <Row>
          <Col id="leftcontact">
            <h1>Contacts</h1>

            <p>
              Egestas pretium aenean pharetra magna ac.Et <br /> 
              tortor consequat id porta nibh venenatis cras sed
            </p>
            <ul className="facilites flex-sd-2">
              <li id="icons">
                <FontAwesomeIcon icon={faPhone} id='iconstyle' size="2x" />
                <p>(329) 580-70772212<br /> 
                    (650) 382-50202212</p>
              </li>
              <li id="icons">
                <FontAwesomeIcon icon={faMessage} id='iconstyle' size="2x" />

                <p>contact@gmail.com<br /> 
                    lorem@yahoo.com</p>
              </li>
              <li id="icons">
                <FontAwesomeIcon icon={faLocation} id='iconstyle' size="2x" />

                <p>54826 Fadel Circles <br /> 
                Darrylstad, AZ 90995</p>
              </li>
              <li id="icons">
                <FontAwesomeIcon icon={faClock} id='iconstyle' size="2x" />

                <p>Everyday<br/>
                10 am — 20 pm</p>
              </li>
            </ul>
          </Col>
          <Col sm={5}>
            <div className="maplocation">
             <Googlemap /> 
             
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default Location;
