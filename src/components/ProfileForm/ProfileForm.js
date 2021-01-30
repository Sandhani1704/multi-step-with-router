import './ProfileForm.css';
import React from 'react';
import { useHistory } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { useSignupForm } from '../SignupFormContext/SignupFormContext'
import { motion } from 'framer-motion';
import { Animator } from "../Animator";


function ProfileForm() {
    const { register, handleSubmit, errors } = useForm();
    const history = useHistory();
    const { profile, setProfile } = useSignupForm();
    
    function onSubmit(data) {
        console.log(data)
        history.push('/social')
        setProfile(data)
    }

    
    return (
        <Animator>
        <form className="signup-form" onSubmit={handleSubmit(onSubmit)} noValidate>
            <h2 className="signup-form__title">Tell us about yourself</h2>
            <input className="signup-form__input" type='text' name='name' placeholder='What is your name?'
                ref={register({required: true})} 
                defaultValue={profile.name}
                />
                <p>{errors.name && 'name is required.'}</p>
            <input className="signup-form__input" type='email' name='email' placeholder='What is your email?' 
            ref={register({required: true, pattern: /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/ })}
            defaultValue={profile.email}
            />
            <p>{errors.email && 'A valid email is required.'}</p>
            <input className="signup-form__submit" type='submit' value='next' />
        </form>
        </Animator>
    );
}

export default ProfileForm;