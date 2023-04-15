import React from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

const CardComponent = (props) => {
  return (
    <Card  style={{ width: '20rem' , height: '18rem' , margin: '1rem' , border : '0.2rem solid grey' }}>
      <Card.Img variant="top" src = {props.image}/>
      <Card.Body>
        {/* <Card.Title style = {{fontSize: '10px'}}>{props.imageTitle}</Card.Title> */}
        <Card.Text style = {{fontSize: '15px'}}>
          {`${props.imageTitle.substring(0,25)}........`}
        </Card.Text>
        <Card.Link  
             href={`https://www.youtube.com/watch?v=${props.videoLink}`}
          >Card Link</Card.Link>  
      </Card.Body>

    </Card>
  )
}

export default CardComponent