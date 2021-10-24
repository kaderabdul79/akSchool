import React from 'react';
import { useState , useEffect } from 'react';
import useServies from '../../hooks/useServices';
import Course from '../Course/Course';

const Services = () => {
    // const [courses,setCourses] = useState([]);
    // useEffect(() => {
    //      fetch('./fakedata.json')
    //     .then(res => res.json())
    //     .then(data => setCourses(data))
    // } , [])
    const [courses] = useServies();
    return (
        <div>
            {
                courses.map(course => <Course key={course.id} course={course}></Course>)
            }
        </div>
    );
};

export default Services;