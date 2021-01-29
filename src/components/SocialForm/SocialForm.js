import './SocialForm.css';
import React from 'react';
import { useHistory } from 'react-router-dom';
import { useForm } from 'react-hook-form';

function SocialForm() {
    const { register, handleSubmit, errors } = useForm();
    const history = useHistory();

    function onSubmit(data) {
        console.log(data)
        history.push('/review')
    }


    return (


        <form className="signup-form" onSubmit={handleSubmit(onSubmit)} noValidate>
            <h2>How can we find you on social?</h2>
            <input type='text' name='twitter' placeholder='What is your Twitter?'
                ref={register({ required: true })} />
            <p>{errors.twitter && 'twitter is required.'}</p>
            <input type='text' name='facebook' placeholder='What is your Facebook?'
                ref={register({ required: true })} />
            <p>{errors.facebook && 'Facebook is required.'}</p>
            <input type='submit' value='next' />
        </form>



    );
}

export default SocialForm;