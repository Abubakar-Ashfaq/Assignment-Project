import React from 'react'

import Card from 'react-bootstrap/Card'

import Button from 'react-bootstrap/Button'

function aboudtcardhero({item}) {
 const image1urel="https://images.unsplash.com/photo-1560448205-4d9b3e6bb6db?crop=entropy&cs=tinysrgb&fm=jpg&ixlib=rb-1.2.1&q=60&raw_url=true&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTl8fHJvb218ZW58MHx8MHx8&auto=format&fit=crop&w=500"
  return (
    <Card key={item._id} className='size'>
    <Card.Img variant="top" src={image1urel} />
    <Card.Body>
      <Card.Title>{item.descripion}</Card.Title>
      <Card.Text>
       Room Capacity {item.roomcapacity}
      </Card.Text>
      <Button variant="primary">See Avaliabiltiy</Button>  
    </Card.Body>
  </Card> 

  )
}

export default aboudtcardhero;
