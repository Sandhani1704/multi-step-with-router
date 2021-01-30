import './SignupForm.css';
import React from 'react';
import { Switch, Route, useLocation } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import ProfileForm from '../ProfileForm/ProfileForm';
import SocialForm from '../SocialForm/SocialForm';
import Review from '../Review/Review';
import StepLinks from '../StepLinks/StepLinks';
import SignupFormProvider from '../SignupFormContext/SignupFormContext';

function SignupForm() {
    const location = useLocation ();
    

    return (
        <SignupFormProvider>
        <>
            <StepLinks />
            <AnimatePresence>
            <Switch location={location} key={location.pathname}>
                <Route path='/' exact component={ProfileForm}/>
                <Route path='/social' component={SocialForm} />
                <Route path='/review' component={Review} />

            </Switch>
            </AnimatePresence>
        </>
</SignupFormProvider>
    );
}

export default SignupForm;