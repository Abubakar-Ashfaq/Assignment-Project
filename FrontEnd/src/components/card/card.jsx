import React from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import './cardstyle.css'
function card() {
  return (
      <Card className="customcard" data-aos="zoom-in">
        <div className="innercard">
          <Card.Body>
            <Card.Title className="h1">Stay Longer, Save More</Card.Title>
            <div className="text">
              It's simple: the longer you stay, the more you save!
            </div>
            <Card.Text className="offer">
              Save up to 30% on daily rate for stays longer than 14 nights
              <br />
              <br />
              Save up to 20% off the nightly rate on stays between 7-14 nights
            </Card.Text>
            <Button href="/rooms"
              style={{
                marginInline: "5rem",
                backgroundColor: "#f4fbfd",
                color: "#285484",
                padding: "8px",
                fontWeight: "bold",
              }}
            >
              View Rooms
            </Button>
          </Card.Body>
        </div>
      </Card>
  );
}

export default card;
