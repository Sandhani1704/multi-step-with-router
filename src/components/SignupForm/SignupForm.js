import './SignupForm.css';
import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { Switch, Route } from 'react-router-dom';
import ProfileForm from '../ProfileForm/ProfileForm';
import SocialForm from '../SocialForm/SocialForm';
import Review from '../Review/Review';
import StepLinks from '../StepLinks/StepLinks';

function SignupForm() {
    return (

        <div className="signup-form">
            <StepLinks />
            <Switch>
            <Route path='/' exact component={ProfileForm} />
            <Route path='/social' component={SocialForm} />
            <Route path='/review' component={Review} />
            
            </Switch>
        </div>

    );
}

export default SignupForm;