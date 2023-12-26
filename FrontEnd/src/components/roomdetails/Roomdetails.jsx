import React from "react";
import Card from "react-bootstrap/Card";
import { useParams } from "react-router-dom";
import Button from "react-bootstrap/Button";
import { Container, Row, Col } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import {
  faPerson,
  faBed,
  faStoreAlt,
  faCalendar,
  faKitchenSet,
  faContactBook,
} from "@fortawesome/free-solid-svg-icons";
import BlueCard from "../../components/card/card";
import Loader from "../../layout/loader/Loader";
import "./roomdetailsstyle.css";
import { useState, useEffect } from "react";
import helpers from "../helpers";
import axios from "axios";

const locate =  "http://localhost:4000/" + "/roomimages/";

function Roomdetails() {
  const [room, setRoom] = useState([]);
  const [loading, setLoading] = useState(true);
  const [loggedIn, setLoggedIn] = useState(false);
  const [isfull, setIsFull] = useState(false);
  const param = useParams();
  useEffect(() => {
    if (
      localStorage.getItem("user") === "user" ||
      localStorage.getItem("user") === "admin"
    )
      setLoggedIn(true);
    else setLoggedIn(false);

    async function fetchData() {
      await axios
        .get(`${locate}/roomslist/${param.id}`)
        .then((res) => {
          setRoom(res.data);
          room ? setLoading(false) : setLoading(true);
        })
        .catch((error) => {
          toast.error(error.response.data.message, {
            position: "top-center",
          });
        });
    }
    fetchData();
    if (room.roomcapacity === 0) {
      setIsFull(true);
    }
    // eslint-disable-next-line
  }, [room]);

  async function BookRoom(e) {
    e.preventDefault();
    axios({
      method: "put",
      url: `${locate}/roomslist?id=${param.id}`,
      headers: {
        Authorization: localStorage.getItem("token")
          ? `${localStorage.getItem("token")}`
          : "",
      },
      data: {
        roomcapacity: room.roomcapacity - 1,
      },
    })
      .then((res) => {
        toast.success(res.data.message, {
          position: "top-center",
        });
      })
      .catch((err) => {
        toast.error(err.response.statusText, {
          position: "top-center",
        });
      });
  }

  return loading ? (
    <div>
      <Loader />
    </div>
  ) : (
    <Container>
      <Row>
        <Col sm={8}>
          <div
            style={{ display: "flex", marginTop: "4rem", marginBottom: "4rem" }}
          >
            <Card style={{ width: "45rem" }}>
              <Card.Img
                variant="top"
                src={locate + room.image}
                style={{ height: "32rem", width: "100%" }}
              />
              <Card.Body>
                <Card.Title>
                  <li>
                    <FontAwesomeIcon icon={faPerson} size="2x" />{" "}
                    <strong>{room.roomcapacity}</strong> Sleeps
                  </li>
                  <li>
                    <FontAwesomeIcon icon={faBed} size="2x" /> <strong></strong>{" "}
                    Air Conditioner
                  </li>
                </Card.Title>
                <Card.Text>
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit. In
                  ad quos assumenda, cupiditate similique laboriosam molestias
                  iste enim. Saepe id delectus iusto, esse quo voluptas ullam,
                  quasi consequuntur at cumque magnam, similique fugit mollitia.
                  Soluta fuga blanditiis delectus temporibus nam?
                </Card.Text>
                {loggedIn ? (
                  <Button
                    variant="primary"
                    onClick={BookRoom}
                    style={{ marginInline: "40%" }}
                    disabled={isfull}
                  >
                    BookNow
                  </Button>
                ) : (
                  <Card.Text
                    style={{
                      fontWeight: "bold",
                      fontSize: "1rem",
                      color: "red",
                    }}
                  >
                    You must be logged in to Book Room
                  </Card.Text>
                )}
              </Card.Body>
            </Card>
          </div>
          <div style={{ marginBottom: "4rem" }}>
            <h4>Room facilities</h4>
            <li id="roomfacility">
              <FontAwesomeIcon
                icon={faBed}
                size="2x"
                style={{ paddingRight: "1rem" }}
              />
              Comfortable bed
            </li>
            <li id="roomfacility">
              <FontAwesomeIcon
                icon={faStoreAlt}
                size="2x"
                style={{ paddingRight: "1rem" }}
              />
              Separate Cupboards
            </li>
            <li id="roomfacility">
              <FontAwesomeIcon
                icon={faContactBook}
                size="2x"
                style={{ paddingRight: "1rem" }}
              />
              Complaint Service
            </li>
            <li id="roomfacility">
              <FontAwesomeIcon
                icon={faCalendar}
                size="2x"
                style={{ paddingRight: "1rem" }}
              />
              Immediate Support
            </li>
            <li id="roomfacility">
              <FontAwesomeIcon
                icon={faKitchenSet}
                size="2x"
                style={{ paddingRight: "1rem" }}
              />
              Kitchen Facility
            </li>
          </div>
        </Col>
        <Col sm={4} style={{ marginBlock: "4rem" }}>
          <Card>
            <Card.Img variant="top" src={locate + room.image} />
          </Card>
          <Card style={{ marginBlock: "2rem" }}>
            <Card.Img variant="top" src={locate + room.image} />
          </Card>
          <BlueCard />
        </Col>
      </Row>
    </Container>
  );
}

export default Roomdetails;
