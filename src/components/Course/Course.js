import React from 'react';
import './Course.css';
import Card from 'react-bootstrap/Card'
import CardGroup from 'react-bootstrap/CardGroup';

const Course = (props) => {
    const {id,courseName,faculty,price,targetStudent,rating,module,enrolled,img,description} = props.course;
    return (
        <div>
            <CardGroup>
            <Card>
                <Card.Img variant="top" src={img} />
                <Card.Body>
                <Card.Title>Course Title : {courseName}</Card.Title>
                <Card.Text>{description}</Card.Text>
                <h4>Total Modules : {module}</h4>
                <h3>Total Enrolled : {enrolled}</h3>
                <h3>Instructor : {faculty}</h3>
                <h4>Course Price : {price} Tk</h4>
                <p>Our Targeted Students are : {targetStudent}</p>
                </Card.Body>
                <Card.Footer>
                <small className="text-muted">Rating : {rating}</small>
                </Card.Footer>
            </Card>
            </CardGroup>
        </div>
    );
};

export default Course;