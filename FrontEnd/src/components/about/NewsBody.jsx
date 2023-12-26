import React from "react";
import { Row, Col, Container } from "react-bootstrap";

function NewsBody() {
  return (
    <Container
      className="logo"
      style={{
        marginTop: "2rem",
        marginbottom: "3rem",
        backgroundColor: "#f4fbfd",
      }}
    >
      <Row>
        <Col sm={1} md={6} lg={4}>
          <img
            style={{ paddingLeft: "20px", marginTop: "5rem" }}
            className="rounded-circle"
            alt="100x100"
            src="https://mdbootstrap.com/img/Photos/Avatars/img%20(30).jpg"
            data-holder-rendered="true"
          ></img>
        </Col>
        <Col sm={1} md={6} lg={8}>
          <h3 style={{ paddingTop: "11%" }}>
            "She is a diam maecenas sed enim ut sem. Scelerisque in dictum non
            consectetur a erat nam. Commodo viverra maecenas accumsan lacus"
          </h3>
          <p style={{ paddingTop: "1rem" }}>
            Founder of the hostel <span style={{fontWeight:"600"}}>
                “Hosteller”
                </span>
          </p>
        </Col>
      </Row>
    </Container>
  );
}
export default NewsBody;
