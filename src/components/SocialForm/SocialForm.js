import './SocialForm.css';
import React from 'react';
import { useHistory } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { useSignupForm } from '../SignupFormContext/SignupFormContext'

function SocialForm() {
    const { register, handleSubmit, errors } = useForm();
    const history = useHistory();
    const {social, setSocial} = useSignupForm()

    function onSubmit(data) {
        console.log(data)
        history.push('/review')
        setSocial(data)
    }

    return (


        <form className="signup-form" onSubmit={handleSubmit(onSubmit)} noValidate>
            <h2 className="signup-form__title">How can we find you on social?</h2>
            <input className="signup-form__input" type='text' name='twitter' placeholder='What is your Twitter?'
                ref={register({ required: true })} 
                defaultValue={social.twitter}/>
            <p>{errors.twitter && 'twitter is required.'}</p>
            <input className="signup-form__input" type='text' name='facebook' placeholder='What is your Facebook?'
                ref={register({ required: true })} 
                defaultValue={social.facebook}
                />
            <p>{errors.facebook && 'Facebook is required.'}</p>
            <input className="signup-form__submit" type='submit' value='next' />
        </form>



    );
}

export default SocialForm;