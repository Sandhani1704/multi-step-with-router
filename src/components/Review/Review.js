import './Review.css';
import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { useSignupForm } from '../SignupFormContext/SignupFormContext'


function Review() {
    const { profile, social } = useSignupForm();

    function handleSubmit(e) {
        e.preventDefault()
        alert('you are submiting')
    }

    return (

        <form className="signup-form" onSubmit={handleSubmit} >
            <h2 className="signup-form__title">Review all your info</h2>
            <p className="review-info"><strong>Name</strong>: {profile.name}</p>
            <p className="review-info"><strong>Email</strong>: {profile.email}</p>
            <p className="review-info"><strong>Twitter</strong>: {social.twitter}</p>
            <p className="review-info"><strong>Facebook</strong>: {social.facebook}</p>
            <input className="signup-form__submit" type='submit' value='submit all info' />
        </form>


    );
}

export default Review;