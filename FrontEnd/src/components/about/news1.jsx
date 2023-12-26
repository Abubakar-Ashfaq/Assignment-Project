import React from 'react'
import Button from 'react-bootstrap/Button'
import { Container,Col,Row } from "react-bootstrap";

function news1() {
    return(
        <Container style={{backgroundColor:'#f4fbfd',display:'flex'}}>
            <Row>
            <Col sm={1} md={6} lg={6}>
            <h3 style={{textAlign:'center'}}>
             Are you looking for an apartment?
            </h3>
            <p style={{textAlign:'center'}}>
           Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid blanditiis nemo eum, vero neque possimus aperiam provident sit consequatur facere voluptatem maiores sint. Nemo autem corporis in nobis, voluptatibus suscipit?
            </p>
            <Button variant="primary" style={{marginTop:'0.5rem',marginBottom:'0.5rem',marginLeft:'35%'}}>Submit</Button>   
            </Col>
            <Col sm={1} md={6} lg={6} >    
                <h3 style={{textAlign:'center'}}>
                    Newsletter
                </h3>
                <p style={{textAlign:"center"}}>
             Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut quibusdam quae tenetur minus. Aut iusto modi aliquid obcaecati ab alias ullam deleniti eos eveniet maiores! Neque doloremque tenetur ea velit.
                </p>
                <input style={{marginLeft:'20%',borderRadius:'25px',border:'2px solid black',padding:'20px',width:'200px',height:'15px'}}  type="text" data-type="email" placeholder="Email address"></input>
            </Col>     
              </Row>
  
    </Container>
    )
}
export default news1;