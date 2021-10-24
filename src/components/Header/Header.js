import React from 'react';
import './Header.css'
import { Link , NavLink } from 'react-router-dom';
import { Nav } from 'react-bootstrap';

const Header = () => {
    const a = {
        textDecoration: 'none',
        paddingRight: '20px',
        display: 'inline-block',
        color: 'white'
    }
    return (
        <div className="header">
        <Nav variant="pills" defaultActiveKey="/home">
            <Nav.Item>
                <span>AK School</span>
            </Nav.Item>
            <Nav.Item>
                <NavLink style={a} to="/home">Home</NavLink>
            </Nav.Item>
            <Nav.Item>
                <NavLink  style={a} to="/services">Services</NavLink>
            </Nav.Item>
            <Nav.Item>
                <NavLink  style={a} to="/about">About</NavLink>
            </Nav.Item>
            <Nav.Item>
                <NavLink  style={a} to="/contact">Contact</NavLink>
            </Nav.Item>
        </Nav>
        </div>    
    );
};

export default Header;