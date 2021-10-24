import React from 'react';
import { Row } from 'react-bootstrap';
import useServies from '../../hooks/useServices';
import Metaservice from '../Metaservice/Metaservice';

const Home = () => {
    const [courses] = useServies();
    return (
        <div>
            <Row xs={1} md={2} className="g-4">
                {
                courses.map(course => <Metaservice key={course.id} course={course}></Metaservice>)
                }
            </Row>
        </div>
    );
};

export default Home;