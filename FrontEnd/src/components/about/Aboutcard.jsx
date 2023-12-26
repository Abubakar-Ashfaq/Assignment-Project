import React from 'react'
import { Row,Col,Container} from "react-bootstrap";
import './aboutstyle.css'

function Aboutcard (){
     
   
    return (
    <Container>
      <h1 style={{marginTop:"4em"}}>
        The Main Benefit to Choose Hostel
      </h1>
        <Row>
           <Col sm={1} md={4} lg={4}>
            <h1 className='heading'> 80+</h1> 
              <p>
              Consequat interdum varius sit amet mattis vulputate enim nulla
              </p>
           </Col>
           <Col sm={1} md={4} lg={4}>
              <h1 className='heading'>60+</h1>
              <p>
              Consequat interdum varius sit amet mattis vulputate enim nulla
              </p>
           </Col>
           
           <Col sm={1} md={4} lg={4}>
              <h1 className='heading'>98%</h1>
              <p>
              Consequat interdum varius sit amet mattis vulputate enim nulla
              </p>   
           </Col> 
 
           </Row>
      
        </Container>
      
      
    );
}
export default Aboutcard;