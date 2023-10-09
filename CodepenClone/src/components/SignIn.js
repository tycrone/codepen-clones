import React from "react";
import {useAuth} from './contexts/AuthContext';

export default function SignIn() {

    const {googleAuthenticate} = useAuth()
    const SignInWithFirebase = () => {
        googleAuthenticate()
    }

    return (<button onClick ={SignInWithFirebase}>Sign In with Google</button>);
}
