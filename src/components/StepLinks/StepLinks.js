import './StepLinks.css';
import React from 'react';
import { NavLink } from 'react-router-dom';
import { useSignupForm } from '../SignupFormContext/SignupFormContext';

function StepLinks() {
    const { profile, social } = useSignupForm();

    function isEmpty(obj) {
        return Object.keys(obj).length === 0;
    }

    const isProfileDone = !isEmpty(profile);
    const isSocialDone = !isEmpty(social);

    return (
            <div className='step-links'>
               <NavLink className='step-link' to='/' exact>{isProfileDone ? '👍': '👎'} Profile</NavLink>
               {isSocialDone ? <NavLink className='step-link' to='./social'>{isSocialDone ? '👍': '👎'} Social</NavLink> : <a className='step-link'>{isSocialDone ? '👍': '👎'} Social</a> }
               { isProfileDone && isSocialDone ? <NavLink className='step-link' to='./review'>{isProfileDone && isSocialDone ? '👍': '👎'} Review</NavLink> : <a className='step-link'>{isSocialDone ? '👍': '👎'} Review</a> }
            </div>
           
    );
}


export default StepLinks;