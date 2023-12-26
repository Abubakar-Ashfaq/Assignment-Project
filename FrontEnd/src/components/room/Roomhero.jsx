import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import './roomherostyle.css'
import { useNavigate } from "react-router-dom";
function Roomhero() {
  let navigate = useNavigate();
 

  function routeChange(e) {
    let path = `/`;
    navigate(path);
  }
  return (
    <div id="roomhero">
      <Container >
        <Row>
          <Col>
          <h5>
            <span style={{color:"#285484", cursor: "pointer"}}  onClick={routeChange}>Home</span> / Room
          </h5>
           <p>
           Rooms
           </p>
               
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default Roomhero;
