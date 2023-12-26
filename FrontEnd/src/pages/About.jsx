import { React, useId } from "react";
import Hero from "../components/about/Abouthero";
import CardHeading from "../components/about/Aboutcard";  
import Aboutcardhero from "../components/room/Room";
import { useEffect, useState } from "react";
import { Row, Col } from "react-bootstrap";
import axios from "axios";
import NewsBody from "../components/about/NewsBody";
import { Container } from "react-bootstrap";
import NewsLetter from "./../components/about/NewsLetter";
import AboutContact from "./../components/about/AboutContact";
import helpers from "../components/helpers";
function About() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const id = useId();
  const localhost = helpers.localhost;

  useEffect(() => {
    setLoading(true);
    async function fetchData() {
      await axios.get("http://localhost:4000" + "/roomslist").then((res) => {
        setData(res.data);
        setLoading(false);
      });
    }
    fetchData();
  }, []);
  return (
    <Container>
      <Hero />
      <CardHeading />

      <Row ms={4}>
        <h1 style={{marginBlock:"2rem"}} className='heading'>Hostel Rooms</h1>
        {loading ? (
          <div> Loading ...</div>
        ) : (
          data.slice(0, 3).map((item) => {
            return (
              <Col md={4}>
                <Aboutcardhero key={id} item={item} />
              </Col>
            );
          })
        )}
      </Row>
      <AboutContact />
      <NewsBody />
      <NewsLetter />
    </Container>
  );
}
export default About;
