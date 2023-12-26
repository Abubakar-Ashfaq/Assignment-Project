import React from "react";
import Aos from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import { Button } from "react-bootstrap";
import {useId} from 'react';
function Room({ item }) {
  const id=useId();
  useEffect(() => {
    Aos.init({ duration: 1300 });
  }, []);

  const locate= "http://localhost:4000"+"/roomimages/";
  return (
      <div
        data-aos="fade-right"
        key={id}
        className="card"
        style={{ borderRadius: "10px", textAlign: "center",padding:"0px",margin:"0px 2px",width:"23rem" }}
      >
        <img
          className="card-img-top"
          src={locate + item.image}
          alt="Cardcap"
          style={{ borderTopLeftRadius: "10px", borderTopRightRadius: "10px",height:"300px" }}
        ></img>
        <div className="card-body">
          <h5 className="card-title">Room No {item.roomno}</h5>
          <p className="card-text" style={{ fontWeight: "bolder" }}>
            {item.roomdescription}
          </p>
          <Button href="/rooms" style={{ backgroundColor: "#285484" }}>
            Check for Availability
          </Button>
        </div>
      </div>
    
  );
}

export default Room;
