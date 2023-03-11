import React from 'react'
import { Card } from 'react-bootstrap';


const EducationCard = ({data}) => {
  return (
    <Card style={{backgroundColor:'transparent'}}>
         <Card.Body>
        <Card.Title>{data.college}</Card.Title>
        <Card.Subtitle>{data.university}</Card.Subtitle>
        <Card.Text className="mt-5">
         {data.course}
        </Card.Text>
        {data.specification?<Card.Text>{data.specification}</Card.Text>:null}
      </Card.Body>
      <Card.Footer>{data.year}</Card.Footer>
    </Card>
  )
}

export default EducationCard;