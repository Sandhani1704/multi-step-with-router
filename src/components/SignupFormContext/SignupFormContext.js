import React, {createContext, useContext} from 'react';

export const SignupFormContext = createContext();
export const useSignupForm = () => useContext(SignupFormContext);

export default function SignupFormProvider ({children}) {
    const [profile, setProfile] = React.useState({});
    const [social, setSocial] = React.useState({});

    return (
        <SignupFormContext.Provider value={{profile, setProfile, social, setSocial}}>
            {children}
        </SignupFormContext.Provider>
    )

}