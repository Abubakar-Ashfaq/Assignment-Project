import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import './contactherostyle.css'
function ContactHero() {
  let navigate = useNavigate();
 

  function routeChange(e) {
    let path = `/`;
    navigate(path);
  }
  return (
    <div id="contacthero">
      <Container >
        <Row>
          <Col>
          <h5 style={{marginTop:"3rem"}}>
            <span style={{color:"#285484", cursor: "pointer"}}  onClick={routeChange}>Contact</span> / Room
          </h5>
           <p>
           Contact Us
           </p>
               
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default ContactHero;
