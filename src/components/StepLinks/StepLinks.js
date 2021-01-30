import './StepLinks.css';
import React from 'react';
import { NavLink } from 'react-router-dom';

function StepLinks() {
    return (
            <div className='step-links'>
                <NavLink className='step-link' to='/' exact> Profile</NavLink>
                <NavLink className='step-link' to='./social'> Social</NavLink>
                <NavLink className='step-link' to='./review'> Review</NavLink>
            </div>
           
    );
}

export default StepLinks;