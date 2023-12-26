import React from "react";
import ContactHero from "../components/Contactus/ContactHero";
import { Container } from "react-bootstrap";
import Location from "../components/location/Location";

function Contactus() {
  return (

    <Container>
      <ContactHero />
        <Location/>
    </Container>

  );
}

export default Contactus;
