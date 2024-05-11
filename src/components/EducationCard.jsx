import React from 'react'
import Card from 'react-bootstrap/Card';

const EducationCard = ({data}) => {
  return (
    <Card  className="shadow-lg p-3 rounded mb-5">      
      <Card.Body>
        <Card.Title><b>{data.college}</b></Card.Title>
        <Card.Subtitle className='text-secondary'>{data.university}</Card.Subtitle>
        <Card.Text className="course text-light mb-0 mt-3">
          {data.course}
        </Card.Text>
        <Card.Text className="specialization mb-2 mt-0">
          {data.specialization}
        </Card.Text>
        <Card.Text className="year mb-3">
          {data.year}
        </Card.Text>
        {/* <Card.Text className="grade mb-1">
            Grade
        </Card.Text> */}
      </Card.Body>
    </Card>
  )
}

export default EducationCard