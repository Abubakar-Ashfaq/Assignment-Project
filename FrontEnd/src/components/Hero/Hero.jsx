import React, { useEffect } from "react";
import "./Herostyle.css";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import image1 from "../../images/hero2.jpg";
import Aos from "aos";
import "aos/dist/aos.css";
function Hero() {
  useEffect(() => {
    Aos.init({ duration: 1000 });
  }, []);
  return (
        <Row>
          {/* Left side of hero section */}
          <Col className="leftside" sm={7}>
            <h1 className="hero-title">
              HostelBook <br />
            </h1>
            <h2>Amazing hostel for students and the free spirited traveler</h2>

            <br className="2" />
            <p className="herodescription">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. <br />
              Nesciunt blanditiis facilis quia molestias nihil autem veritatis,{" "}
              <br />
              culpa commodi quisquam dicta doloremque vero dolore ipsum esse,
              debitis beatae adipisci, libero deserunt!
            </p>
          </Col>
          {/* Right side of hero section with image*/}
          <Col sm={5}>
            <div data-aos="zoom-in">
              <img src={image1} alt="hero" id="rightimg"/>
            </div>
          </Col>
        </Row>
 
  );
}

export default Hero;
