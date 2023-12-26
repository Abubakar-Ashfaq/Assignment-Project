import { Row, Col, Card, CardBody, CardTitle } from "reactstrap";

const About = () => {
  return (
    <Row>
      <Col>
        {/* --------------------------------------------------------------------------------*/}
        {/* Card-1*/}
        {/* --------------------------------------------------------------------------------*/}
        <Card>
          <CardTitle className="border-bottom p-3 mb-0">
            <i className="bi bi-bell me-2"> </i>
            About Hostel Book
          </CardTitle>
          <CardBody className="p-4">
            <Row style={{justifyContent:"center"}}>
              <Col lg="8">
                <h2 className="mt-4">About Us</h2>
                <h5 className=" mb-4">
                 Lorem ipsum, dolor sit amet consectetur 
                 adipisicing elit. Ex quam neque dolore magni beatae tenetur, aperiam aut excepturi rerum omnis.
                </h5>
                <img
                  src="https://cdn.pixabay.com/photo/2017/08/31/06/58/taiwan-2699628__340.jpg"
                  alt="hostelimage"
                />
              </Col>
            </Row>
          </CardBody>
        </Card>
      </Col>
    </Row>
  );
};

export default About;
