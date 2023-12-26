import React from "react";
import { useEffect, useState } from "react";
import axios from "axios";
import Hero from "../components/Hero/Hero";
import Subhero from "../components/subhero/Subhero";
import Room from "../components/room/Room";
import { Container, Row } from "react-bootstrap";
import CustomCard from "../components/card/card";
import Location from "../components/location/Location";
import Loader from "../layout/loader/Loader";
import helpers from "../components/helpers";
import Aos from "aos";
import "aos/dist/aos.css";
function HomePage() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const localhost = helpers.localhost;
  useEffect(() => {
    Aos.init({ duration: 1000 });
    setLoading(true);
  
    async function fetchData() {
      await axios.get("http://localhost:4000" +"/roomslist").then((res) => {
        setData(res.data);
        setLoading(false);
      });
    }
    fetchData();
  }, []);
  return (
    <div>
      <Container>
        <Hero />

        <Row xs={1} md={3} lg={1}>
          {loading ? (
            <div>
              {" "}
              <Loader />
            </div>

          ) : (
            data.slice(0, 2).map((item) => {
              return <Room key={item._id} item={item} />;
            })
          )}
            <CustomCard/>
        </Row>
        <Subhero />
        <Location />
      </Container>
    </div>
  );
}

export default HomePage;
