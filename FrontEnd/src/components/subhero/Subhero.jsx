import React, { useEffect } from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import image2 from "./subhero.jpg";
import "./subherostyle.css";
import Aos from "aos";
import "aos/dist/aos.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faElevator,
  faParking,
  faSuitcase,
  faWifi,
} from "@fortawesome/free-solid-svg-icons";

function Subhero() {
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);
  return (
 
        <Row className="subheroclass">
          <Col sm={6} xs={12}>
            <h1>We have everything you need</h1>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fuga
              omnis, quaerat unde quod assumenda pariatur iure. Tempore debitis
              officiis perspiciatis.
            </p>
            <ul className="facilites">
              <li data-aos="fade-right" id="icons">
                <FontAwesomeIcon icon={faWifi} size="2x" id='iconstyle'/>
                <p>
                  {" "}
                  Free available <br /> high speed WiFi
                </p>
              </li>
              <li data-aos="fade-left" id="icons">
                <FontAwesomeIcon icon={faSuitcase} size="2x" id='iconstyle'/>
                <p>
                  Free storage of
                  <br /> luggage of any size{" "}
                </p>
              </li>
              <li data-aos="fade-right" id="icons">
                <FontAwesomeIcon icon={faParking} size="2x" id='iconstyleu'/>
                <p>
                  Parking place <br />
                  allocated to you
                </p>
              </li>
              <li data-aos="fade-left" id="icons">
                <FontAwesomeIcon icon={faElevator} size="2x" id='iconstyleu'/>
                <p>
                  Elevator Service <br />
                  Available
                </p>
              </li>
            </ul>
          </Col>
          <Col sm={6} xs={12}>
            <img src={image2} id="subheroimg" alt="sub" />
          </Col>
        </Row>
  );
}

export default Subhero;
