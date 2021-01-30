import './Review.css';
import React from 'react';
import { useSignupForm } from '../SignupFormContext/SignupFormContext';
import { Animator } from "../Animator";


function Review() {
    const { profile, social, setProfile, setSocial } = useSignupForm();

    function handleSubmit(e) {
        e.preventDefault()
        alert('you are submiting')
        setProfile({});
        setSocial({});
    }

    return (
        <Animator>

        <form className="signup-form" onSubmit={handleSubmit} >
            <h2 className="signup-form__title">Review all your info</h2>
            <p className="review-info"><strong>Name</strong>: {profile.name}</p>
            <p className="review-info"><strong>Email</strong>: {profile.email}</p>
            <p className="review-info"><strong>Twitter</strong>: {social.twitter}</p>
            <p className="review-info"><strong>Facebook</strong>: {social.facebook}</p>
            <input className="signup-form__submit" type='submit' value='submit all info' />
        </form>
        </Animator>


    );
}

export default Review;