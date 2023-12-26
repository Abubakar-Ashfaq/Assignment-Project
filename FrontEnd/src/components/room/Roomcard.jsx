import Col from "react-bootstrap/Col";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./roomcardstyle.css";
import { faBed, faPerson } from "@fortawesome/free-solid-svg-icons";
import Button from "react-bootstrap/Button";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import Aos from "aos";
import "aos/dist/aos.css";
import { useState, useEffect } from "react";
import ErrorHandle from "../ErrorComponent/ErrorHandle";
import {toast} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';



const locate = "http://localhost:4000/" + "/roomimages/";
function Roomcard({ item }) {
  const [isfull, setIsFull] = useState(false);
  const [loggedIn, setLoggedIn] = useState(false);
  const [Errormsg, setErrormsg] = useState("");

  useEffect(() => {
    if (item.roomcapacity === 0) {
      setIsFull(true);
    }
    if (
      localStorage.getItem("user") === "user" ||
      localStorage.getItem("user") === "admin"
    )
      setLoggedIn(true);
    else setLoggedIn(false);
  }, [item.roomcapacity]);
  useEffect(() => {
    Aos.init({ duration: 300 });
  });

  async function BookRoom(e) {
    axios({
      method: "put",
      url: `${locate}/roomslist?id=${item._id}`,
      headers: {
        Authorization: localStorage.getItem("token")
          ? `${localStorage.getItem("token")}`
          : "",
      },
      data: {
        roomcapacity: item.roomcapacity - 1,
      },
    })
      .then((res) => {
        toast.success(res.data.message, {
          position: "top-center"});
      })
      .catch((err) => {
        setErrormsg(err.response);
      });
  }

  let navigate = useNavigate();
  function routeChange(e) {
    let path = `/rooms/details/${item._id}`;
    navigate(path);
  }

  return (
    <div>
      <div
        className="d-flex"
        id="card-room"
        style={{
          marginBottom: "5rem",
          padding: "0px",
        }}
      >
        <Col sm={4}>
          <img id="imageroom" src={locate + item.image} alt="hero" />
        </Col>
        <Col sm={6} style={{ marginLeft: "10px" }}>
          <h3
            className="room-title"
            style={{ cursor: "pointer" }}
            onMouseOver={changeBackground}
            onMouseLeave={normalbackground}
            onClick={routeChange}
          >
            {item.roomdescription}
          </h3>
          <br className="2" />
          <p className="description">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nesciunt
            blanditiis facilis quia molestias nihil
          </p>
          <br />
          <li>
            <FontAwesomeIcon icon={faPerson} size="2x" />{" "}
            <strong>{item.roomcapacity}</strong> Sleeps
          </li>
          <li>
            <FontAwesomeIcon icon={faBed} size="2x" />{" "}
            <strong>{item.ac}</strong> Air Conditioner
          </li>
        </Col>
        <Col sm={2} id="book-button">
          <div className=" hero-s">
            <p>Rs.{item.roomprice}</p>
          </div>
          <br className="2" />
          <div className="bookdesc">
            {loggedIn ? (
              <Button
                variant="primary"
                size="lg"
                disabled={isfull}
                onClick={BookRoom}
              >
                Book Now
              </Button>
            ) : (
              <div
                style={{
                  fontWeight: "bold",
                  fontSize: "1rem",
                  color: "red",
                }}
              >
                Login to Book Room
              </div>
            )}
          </div>
        </Col>
      </div>
      <div
        style={{ position: "fixed", marginTop: "-20rem", marginLeft: "25rem" }}
      >
        {Errormsg ? <ErrorHandle errormsg={Errormsg} /> : null}
      </div>
    </div>
  );
  function changeBackground(e) {
    e.target.style.color = "#285484";
  }
  function normalbackground(e) {
    e.target.style.color = null;
  }
}

export default Roomcard;
