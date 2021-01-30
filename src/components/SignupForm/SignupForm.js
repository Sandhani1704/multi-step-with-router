import './SignupForm.css';
import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { Switch, Route } from 'react-router-dom';
import ProfileForm from '../ProfileForm/ProfileForm';
import SocialForm from '../SocialForm/SocialForm';
import Review from '../Review/Review';
import StepLinks from '../StepLinks/StepLinks';
import SignupFormProvider from '../SignupFormContext/SignupFormContext';

function SignupForm() {
    

    return (
        <SignupFormProvider>
        <>
            <StepLinks />
            <Switch>
                <Route path='/' exact component={ProfileForm}/>
                <Route path='/social' component={SocialForm} />
                <Route path='/review' component={Review} />

            </Switch>
        </>
</SignupFormProvider>
    );
}

export default SignupForm;