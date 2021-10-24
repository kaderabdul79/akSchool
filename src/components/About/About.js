import React from 'react';
import './About.css'
import { BarChart, Bar, XAxis, YAxis, Tooltip, CartesianGrid } from 'recharts';
import useServies from '../../hooks/useServices';

const About = () => {

    
const data = [
            {month: 'September', TotalStudents: 400, enrollStudents: 112},
            {month: 'October', TotalStudents: 400, enrollStudents: 99},
            {month: 'Novemember', TotalStudents: 400, enrollStudents: 50},
            {month: 'Decemember', TotalStudents: 400, enrollStudents: 178}
        ];


    return (
        <div className="abt">
             <BarChart width={600} height={300} data={data}>
                        <XAxis dataKey='month' />
                        <YAxis  dataKey='enrollStudents' />
                        <Tooltip />
                        <Bar dataKey="enrollStudents" fill="rgb(56, 173, 173)" barSize={30} />
            </BarChart>
            <p>Fig : Monthly Enrolled Students Chart</p>
        </div>
    );
};

export default About;