import React from 'react'
import Button from 'react-bootstrap/Button'
import {Container,Col,Row} from 'react-bootstrap'
function register(){
    return(
        <Container style={{backgroundColor:'#f4fbfd',marginBottom:'2rem'}}> 
        <Row>
            <Col sm={1} md={12} lg={12}>
            <h1 style={{textAlign:'center'}}>
                Register
            </h1>
             </Col>
             </Row>
                 <Row>
            <Col sm={1} md={12} lg={12} style={{textAlign:'center'}}>
            <label>Name</label>
                 <br/>
                 <input type="name" placeholder="Enter Name" ></input>
                 <br/>
            <label>Email address</label>
                 <br/>
                 <input type="email" placeholder="Enter email" ></input>
                 <br/>
                 <label >Password</label>
                 <br/>
                 <input type="email" placeholder="Enter Password"></input>
                 <br/>
                <Button style={{marginTop:'1rem',marginBottom:'1rem'}} variant="primary">Submit</Button>  
            </Col>
        </Row>
            </Container>
     
    )
}
export default register;