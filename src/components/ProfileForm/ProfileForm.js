import './ProfileForm.css';
import React from 'react';
import { useHistory } from 'react-router-dom';
import { useForm } from 'react-hook-form';


function ProfileForm() {
    const { register, handleSubmit, errors } = useForm();
    const history = useHistory();
    
    function onSubmit(data) {
        console.log(data)
        history.push('/social')
    }


    return (


        <form className="signup-form" onSubmit={handleSubmit(onSubmit)} noValidate>
            <h2>Tell us about yourself</h2>
            <input type='text' name='name' placeholder='What is your name?'
                ref={register({required: true})} />
                <p>{errors.name && 'name is required.'}</p>
            <input type='email' name='email' placeholder='What is your email?' 
            ref={register({required: true, pattern: /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/ })}/>
            <p>{errors.email && 'A valid email is required.'}</p>
            <input type='submit' value='next' />
        </form>



    );
}

export default ProfileForm;