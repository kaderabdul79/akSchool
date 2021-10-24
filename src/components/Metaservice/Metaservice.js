import React from 'react';
import { Card, Col } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';

const Metaservice = (props) => {
    const {id,courseName,price,faculty,targetStudent,rating,module,enrolled,img,description} = props.course;
    
    let featureCourse;
    if(rating >= 3){
        featureCourse = <div>
    <Col>
      <Card>
        <Card.Img variant="top" src={img} />
        <Card.Body>
          <Card.Title>Course Title : {courseName}</Card.Title>
          <h3>Instructor : {faculty}</h3>
          <Card.Text>
          </Card.Text>
          <h6>Course Price : {price} Tk</h6>
          <Button variant="success">Enroll Now</Button>
        </Card.Body>
      </Card>
    </Col>
        </div>
    }
    return (
        <div>
          {featureCourse}
        </div>
    );
};

export default Metaservice;