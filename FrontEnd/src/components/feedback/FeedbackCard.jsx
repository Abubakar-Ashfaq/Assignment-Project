import React from 'react'
import {Row,Col} from 'react-bootstrap'
import titleimg from '../../images/cv.jpeg'
function FeedBackCard(){
    return (
<div style={{backgroundColor:'lightgrey'}}>
    <Row>
    <Col sm={1} md={6} lg={6}  style={{border:'2px solid white',paddingTop:'2rem',paddingBottom:'2rem'}} >
    <img class="rounded-circle" alt="Cinque Terre" src={titleimg} style={{ display: 'block',
  marginLeft: 'auto',
  marginRight: 'auto',
  width:'100px'}} /> 
        <h6 style={{textAlign:'center',paddingTop:'2rem',fontWeight:'bold'}}>
            Abdullah Imran
        </h6>
      <p style={{textAlign:'center'}}> 
    Lorem ipsum dolor, sit amet consectetur adipisicing elit. Exercitationem accusantium, eligendi nostrum cum ducimus dolorum numquam soluta veniam molestias amet saepe corrupti dolores est earum nesciunt quod eaque assumenda ut!
      </p>
        </Col>

        <Col sm={1} md={6} lg={6} style={{border:'2px solid white',paddingTop:'2rem',paddingBottom:'2rem'}}>
        <img class="rounded-circle" alt="Cinque Terre" src={titleimg} style={{ display: 'block',
  marginLeft: 'auto',
  marginRight: 'auto',
  width:'100px'}} /> 
            <h6 style={{textAlign:'center',paddingTop:'2rem',fontWeight:'bold'}}> 
                Baqir Naqvi
            </h6>
       <p style={{textAlign:'center'}}>
      Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eius cumque id inventore. Asperiores cum cupiditate quidem, aut tempore suscipit vel corrupti sed mollitia, fugit natus distinctio. Aliquid magni ipsam excepturi.
       </p>
        </Col>   
    </Row>
</div>
    );
}
export default FeedBackCard;