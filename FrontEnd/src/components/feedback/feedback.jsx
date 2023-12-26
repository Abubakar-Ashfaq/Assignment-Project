import React from 'react'
import {Row, Col} from 'react-bootstrap'
function feedback (){
    return (
       <div style={{backgroundColor:'#f4fbfd'}}>
           <Row>
               <Col sm={1} md={12} lg={12}>
                <h1 style={{textAlign:'center',marginTop:'2rem'}}>
                    What Does Your Customer Say?
                </h1>
               </Col>
               <Col sm={1} md={12} lg={12}>
               <p style={{textAlign:'center'}}>
                   Lorem ipsum dolor sit amet, consectetur adipisicing elit. Odio omnis, veritatis saepe commodi dignissimos itaque tempora sapiente quam porro, aliquid illo adipisci optio provident sequi ipsa, quisquam sed. Harum, provident!
               </p>
               </Col>           
               </Row>
          </div>
    );
    }
export default feedback;