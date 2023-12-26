import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import './aboutherostyle.css';
import { useNavigate } from "react-router-dom";

function Abouthero() {
  let navigate = useNavigate();
 
  function routeChange(e) {
    let path = `/`;
    navigate(path);
  }
  return (
    <div id="abouthero"  >
      <Container >
        <Row>
          <Col>
          <h5>
          <span style={{color:"#285484", cursor: "pointer"}}  onClick={routeChange}>Home</span> / About
          </h5>
           <p>
           About
           </p>
               
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default Abouthero;
